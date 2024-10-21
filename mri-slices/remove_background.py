import cv2
import numpy as np
import matplotlib.pyplot as plt
import os

def remove_background(image_path):
    # Read the image
    img = cv2.imread(image_path)

    alpha = np.zeros((img.shape[0], img.shape[1]))
    mask = img > 5
    alpha[mask[:, :, 0]] = 255
    
    img = np.concatenate([img, alpha[:, :, None]], 2)
    img = np.transpose(img, (1, 0, 2))

    

    
    return img

# Usage
files = os.listdir('.')
for file in files:
    if 'slice' in file: 
        slice_number = os.path.basename(file).split('_')[-1].split('.')[0]
        slice_number = 251 - int(slice_number)
        result = remove_background(file)
        cv2.imwrite(f'output_{slice_number}.png', result)
