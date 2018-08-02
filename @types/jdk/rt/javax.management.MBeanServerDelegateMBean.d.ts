declare namespace javax {
    namespace management {
interface MBeanServerDelegateMBean {
    getMBeanServerId(): string
    getSpecificationName(): string
    getSpecificationVersion(): string
    getSpecificationVendor(): string
    getImplementationName(): string
    getImplementationVersion(): string
    getImplementationVendor(): string
}

    }
}