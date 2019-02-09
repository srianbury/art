#python 2.7.14
import os
from os import listdir
from os.path import isfile, join

#get path to images on any machine
img_folder = 'images'
cwd = os.getcwd()
img_path = os.path.join(cwd, img_folder)

#get a list of all the files in the directory
onlyfiles = [f for f in listdir(img_path) if isfile(join(img_path, f))]

#create a json array of the file names to write to a file
outfile_text = 'export const filename = [ '
for filename in onlyfiles:
	temp_str = ('"%s", ' % filename)
	outfile_text = outfile_text + temp_str
outfile_text = outfile_text + ']'

with open('filenames.js', 'w+') as outfile:
	outfile.write(outfile_text)

print 'done!'