import numpy as np 
import os
from PIL import Image

if __name__ == '__main__':
    image = np.load('./meas_MID00150_FID94411_bk_tfl_t1w_fs.npy')
    image = np.abs(image) 
    image /= image.max()
    image *= 255
    image[image < 10] = 0

    for i in range(image.shape[-1]):
        image_slice = np.abs(image[:, :, i])
        image_slice = np.flip(image_slice, 0)
        print(image_slice)
        pil_iamge = Image.fromarray(image_slice)
        pil_image = pil_iamge.convert('RGB')
        pil_image.save(os.path.join('public/mri-slices/', f'slice_{i}.jpg'))
        
