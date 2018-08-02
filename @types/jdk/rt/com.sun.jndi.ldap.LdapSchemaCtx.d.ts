declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class LdapSchemaCtx extends com.sun.jndi.toolkit.dir.HierMemDirCtx {
                    public close(): void
                    public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    protected doBind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
                    public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    protected doRebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
                    protected doUnbind(arg0: javax.naming.Name): void
                    protected doRename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                    protected doDestroySubcontext(arg0: javax.naming.Name): void
                    protected doCreateSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                    protected doModifyAttributes(arg0: javax.naming.directory.ModificationItem[]): void
                    protected createNewCtx(): com.sun.jndi.toolkit.dir.HierMemDirCtx
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}