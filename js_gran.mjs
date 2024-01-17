import fs from 'fs'; // Import the fs module for file system operations
import { execSync } from 'child_process'; // Import the execSync function from the child_process module

class GetRandomFile {
    constructor() {
        this.rootdir = process.cwd(); // Get the current working directory
        this.all_file_paths = []; // Initialize an empty array to store all file paths
    }

    recursive_scan_directory(dirname) {
        const directory_contents = fs.readdirSync(dirname, { withFileTypes: true }); // Read the directory contents
        for (const directory_content of directory_contents) {
            const filePath = dirname + '\\' + directory_content.name; // Create the full path of the directory\file
            if (!directory_content.isDirectory()) {
                this.all_file_paths.push(filePath); // Add the file path to the array
            } else {
                this.recursive_scan_directory(filePath); // Recursively scan the subdirectory
            }
        }
    }

    start_pro() {
        try {
            this.recursive_scan_directory(this.rootdir); // Scan and store all file paths
            if (this.all_file_paths.length > 0) {
                const randomIndex = Math.floor(Math.random() * this.all_file_paths.length); // Generate a random index
                const randomFile = `"${this.all_file_paths[randomIndex]}"`; // Get a random file path
                console.log(randomFile); // Log the file path
                execSync(randomFile, { timeout: 2000, shell: true }); // Execute the file with a timeout
            } else {
                console.log('No files found in the directory.'); // Log a message if no files are found
            }
        } catch (e) { }
    }
};

new GetRandomFile().start_pro(); // Create an instance of GetRandomFile and call the start_pro method