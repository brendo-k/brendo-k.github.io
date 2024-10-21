import numpy as np
from PIL import Image

if __name__ == '__main__':
    volume = np.load('./volume.nii')
    print(volume.shape)
    #im = Image.fromarray(arr)
    #im.save("your_file.jpeg")
