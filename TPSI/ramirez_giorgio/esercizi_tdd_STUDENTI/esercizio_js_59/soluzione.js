export function deduplicate(arr) {
    return Array.from(new Set(arr))
}