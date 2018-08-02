declare namespace javax {
    namespace annotation {
interface Resource extends java.lang.annotation.Annotation {
    name(): string
    lookup(): string
    type(): java.lang.Class<any>
    authenticationType(): javax.annotation.Resource$AuthenticationType
    shareable(): boolean
    mappedName(): string
    description(): string
}

    }
}