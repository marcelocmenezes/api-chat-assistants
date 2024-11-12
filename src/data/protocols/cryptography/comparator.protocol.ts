export interface Comparator {
    compare: (plaintext: string, digest: string) => Promise<boolean>
}