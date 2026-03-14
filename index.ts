export class Metadata {
    [key: string | symbol]: any

    define(propertyName: string, value: Metadata) {
        this[propertyName] = value
    }

    each<T extends Metadata>(callback: (value: T, propertyName: string) => void) {
        const properties = Object.keys(this)
        for (const propertyName of properties) {
            if (this[propertyName] instanceof Metadata) {
                callback(this[propertyName] as T, propertyName)
            }
        }
    }

    get(propertyName: string) {
        if (this[propertyName] instanceof Metadata) {
            return this[propertyName]
        }
    }
}
