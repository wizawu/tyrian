declare namespace java {
    namespace lang {
        namespace invoke {
class ILGenMacros {
    public static numArguments(arg0: int): int
    public static populateArray(arg0: java.lang.Object, arg1: int): java.lang.Object
    public static arrayElements(arg0: java.lang.Object, arg1: int, arg2: int): int
    public static arrayElements(arg0: int, arg1: int, arg2: int): int
    public static firstN(arg0: int, arg1: int): int
    public static dropFirstN(arg0: int, arg1: int): int
    public static lastN(arg0: int, arg1: int): int
    public static middleN(arg0: int, arg1: int, arg2: int): int
    public static rawNew(arg0: java.lang.Class<any>): java.lang.Object
    public static placeholder(arg0: int): int
    public static placeholder(arg0: java.lang.Object, arg1: int): int
    public static placeholder(arg0: java.lang.Object, arg1: boolean, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: byte, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: char, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: short, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: int, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: long, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: float, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: double, arg2: int): int
    public static placeholder(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): int
    public static placeholder(arg0: int, arg1: java.lang.Object): int
    public static placeholder(arg0: int, arg1: int): int
    public static placeholder(arg0: int, arg1: int, arg2: int): int
    public static placeholder(arg0: int, arg1: java.lang.Object, arg2: int): int
    public static placeholder(arg0: int, arg1: java.lang.Object, arg2: java.lang.Object, arg3: int): int
    public static placeholder(arg0: int, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: int): int
    public static parameterCount(arg0: java.lang.invoke.MethodHandle): int
    public static invokeExact(arg0: java.lang.invoke.MethodHandle, arg1: int): int
    public static arrayLength(arg0: java.lang.Object): int
    public static push(arg0: int): int
    public static push(arg0: long): long
    public static push(arg0: float): float
    public static push(arg0: double): double
    public static push(arg0: java.lang.Object): java.lang.Object
    public static pop_I(): int
    public static pop_J(): long
    public static pop_F(): float
    public static pop_D(): double
    public static pop_L(): java.lang.Object
    public static load(): void
    public static class: java.lang.Class<any>
}

        }
    }
}