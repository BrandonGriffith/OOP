import os
import random 

class Get_ran:
    rootdir=os.getcwd()
    all_files = []
    all_dirs = []
    filename = ""
    runner = 0

    def fast_scandir(self, dirname):
            subfolders= [f.path for f in os.scandir(dirname) if f.is_dir()]
            for dirname in list(subfolders):
                subfolders.extend(self.fast_scandir(dirname))
            return subfolders

    def tryHard(self):
        if(self.all_files == []):
            return print(self.all_files)
        self.all_dirs = self.fast_scandir(self.rootdir)
        if self.runner == len(self.all_dirs):
            print("auto-reset active")
            self.runner == 0
            self.filename=random.choice(self.all_files)
            print(self.filename)
            try:
                os.startfile(str(self.rootdir + "\\" + self.filename))
            except:
                self.tryHard()
        else:
            location=self.all_dirs[self.runner]
            self.runner += 1
            print("tryHard called " + str(self.runner))
            try:
                os.startfile(str(location + "\\" + self.filename))
            except:
                self.tryHard()

    def startPro(self):
        try:
            for root, dirs, files in os.walk(self.rootdir):
                for _file in files:
                    self.all_files.append(_file)
            self.filename = random.choice(self.all_files)
            print(self.filename)
            os.startfile(str(self.rootdir + "\\" + self.filename))
        except:
            print("not in main folder")
            self.tryHard()


Get_ran().startPro()