declare namespace com {
    namespace sun {
        namespace security {
            namespace auth {
                namespace module {
class UnixSystem {
    protected username: string
    protected uid: long
    protected gid: long
    protected groups: long[]
    public constructor()
    public getUsername(): string
    public getUid(): long
    public getGid(): long
    public getGroups(): long[]
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}