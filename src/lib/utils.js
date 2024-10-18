export function titleToPath(title) {
  return title.toLowerCase().replaceAll(' ', '-');
}

export function pathToTitle(path) {
  return path.slice(0,1).toUpperCase() + path.slice(1).replaceAll('-', ' ');
}
