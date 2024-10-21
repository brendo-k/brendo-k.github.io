import * as nifti from 'nifti-reader-js'
const fs = require('fs')

export async function readNiftiFile(niftiFilePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(niftiFilePath, (err, data) => {
            if (err) {
                reject('Error reading file: ' + err);
                return;
            }

            try {
                // Parse the NIfTI data
                if (nifti.isCompressed(data)){
                    data = nifti.decompress(data);
                }
                const niftiHeader = nifti.readHeader(data);
                const niftiData = nifti.readImage(niftiHeader, data);
                
                // Resolve with the parsed data
                resolve({
                    header: niftiHeader,
                    data: niftiData,
                    dimensions: niftiHeader.dims
                });
            } catch (parseError) {
                reject('Error parsing NIfTI data: ' + parseError);
            }
        });
    });
}
