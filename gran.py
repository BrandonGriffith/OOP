import os
import subprocess
import random
import time

class GetRandomFile:
    def __init__(self):
        self.rootdir = os.getcwd() # Get the current working directory
        self.all_files = [] # Initialize an empty list to store all file paths

    def recursive_scan_directory(self, dirname):
        directory_contents = os.listdir(dirname) # Read the directory contents
        for directory_content in directory_contents:
            filepath = os.path.join(dirname, directory_content) # Create the full path of the file/directory
            if os.path.isdir(filepath):
                self.recursive_scan_directory(filepath) # Recursively scan the subdirectory
            else:
                self.all_files.append(filepath) # Add the file path to the list

    def start_pro(self):
        try:
            self.recursive_scan_directory(self.rootdir) # Get all file paths in the project directory
            if self.all_files:
                random_file = random.choice(self.all_files) # Get a random file path
                print(random_file) # Print the file path
                p = subprocess.Popen([random_file], shell=True) # Run the random file
                time.sleep(1) # Wait for 1 second
                p.terminate() # Terminate the process
            else:
                print('No files found in the directory.') # Print a message if no files are found
        except Exception as e:
            print(f'Error: {e}') # Print the error message if an error occurs

GetRandomFile().start_pro() # Create an instance of GetRandomFile and call the start_pro method