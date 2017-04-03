type StackItemType = "BEGIN" | "CONSTR" | "MEMBER" | "END"

interface StackItem {
    line: string
    type: StackItemType
    name?: string
}

interface Context {
    source: string
    offset: number
    stack: StackItem[]
}

interface Token {
    value: string
    skip: number
}