const random = new java.security.SecureRandom()
const _ = global as any

_.self = global

_.crypto = {
    getRandomValues(array: Uint8Array) {
        let result: number[] = []
        for (let i = 0; i < array.length; i++) {
            result.push(random.nextInt(256))
        }
        return result
    }
}
