export class Metadata {
    [key: string | symbol]: any

    define(propertyName: string, value: Metadata) {
        this[propertyName] = value
    }

    each<T = Metadata>(callback: (value: T, propertyName: string) => void) {
        for (const propertyName in this) {
            callback(this[propertyName], propertyName)
        }
    }

    get(propertyName: string) {
        if (this[propertyName] instanceof Metadata) {
            return this[propertyName]
        }
    }
}
