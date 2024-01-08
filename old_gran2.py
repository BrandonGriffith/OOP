import os
import random
import subprocess

class GetRandomFile:
    def __init__(self):
        self.rootdir = os.getcwd()
        self.all_files = []

    def recursive_scan_directory(self, dirname):
        subfolders = [f.path for f in os.scandir(dirname) if f.is_dir()]
        for dirname in list(subfolders):
            subfolders.extend(self.recursive_scan_directory(dirname))
        return subfolders

    def try_hard(self):
        if not self.all_files:
            return
        self.all_dirs = self.recursive_scan_directory(self.rootdir)
        if len(self.all_dirs) == 0:
            return
        self.filename = random.choice(self.all_files)
        try:
            subprocess.run([self.filename], shell=True)
        except Exception as e:
            print(f"Error running subprocess: {e}")
            self.try_hard()

    def start_pro(self):
        try:
            for root, dirs, files in os.walk(self.rootdir):
                for _file in files:
                    file_path = os.path.join(root, _file)
                    self.all_files.append(file_path)
            if not self.all_files:
                print("No files found in the directory.")
                return
            self.filename = random.choice(self.all_files)
            try:
                print(self.filename)
                subprocess.run([self.filename], shell=True)
            except Exception as e:
                print(f"Error running subprocess: {e}")
                self.try_hard()
        except Exception as e:
            print(f"Error: {e}")
            self.try_hard()


GetRandomFile().start_pro()