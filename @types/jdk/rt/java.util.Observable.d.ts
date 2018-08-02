declare namespace java {
    namespace util {
class Observable {
    public constructor()
    public addObserver(arg0: java.util.Observer | java.util.Observer$$Lambda): void
    public deleteObserver(arg0: java.util.Observer | java.util.Observer$$Lambda): void
    public notifyObservers(): void
    public notifyObservers(arg0: java.lang.Object): void
    public deleteObservers(): void
    protected setChanged(): void
    protected clearChanged(): void
    public hasChanged(): boolean
    public countObservers(): int
    public static class: java.lang.Class<any>
}

    }
}