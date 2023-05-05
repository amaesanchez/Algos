/**
 * Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

  In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

  The canonical path should have the following format:

  The path starts with a single slash '/'.
  Any two directories are separated by a single slash '/'.
  The path does not end with a trailing '/'.
  The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
  Return the simplified canonical path.
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  // create array to store slashes
  // create array to store directories
  // when you hit "..",  pop a directory off
  // when you hit ".", continue
  // when you hit a "", continue
  // when you hit a directory, add a slash to slashes arr and add direct to direct arr
  // if directs arr is empty, return "/";

  let pathS = path.split("/");
  let slashes = [];
  let directs = [];

  for (let i = 0; i < pathS.length; i++) {
    if (pathS[i] === '' || pathS[i] === ".") {
      continue;
    } else if (pathS[i] === "..") {
      directs.pop();
    } else {
      directs.push(pathS[i]);
      slashes.push("/");
    }
  }

  let canonPath = "";

  for (let i = 0; i < directs.length; i++) {
    canonPath += slashes[i] + directs[i];
  }

  return directs.length === 0 ? "/" : canonPath;
};
