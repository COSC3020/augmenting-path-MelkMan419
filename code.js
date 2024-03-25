function augmentingPath(graph, start, end, visited = {}) {
    if (start === end) {
        return [start];
    }
    visited[start] = true;
    for (let neighbor in graph[start]) {
        if (!visited[neighbor] && graph[start][neighbor] > 0) {
            let path = augmentingPath(graph, neighbor, end, visited);
            if (path.length > 0) {
                return [start, ...path];
            }
        }
    }
    return [];
}

module.exports=augmentingPath;
