declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace ctx {
abstract class ComponentDirContext extends com.sun.jndi.toolkit.ctx.PartialCompositeDirContext {
    protected constructor()
    protected c_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
    protected c_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected c_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected c_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected c_getAttributes_nns(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
    protected c_modifyAttributes_nns(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_modifyAttributes_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_bind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_rebind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected c_createSubcontext_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected c_search_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected c_search_nns(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected c_search_nns(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected c_getSchema_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected c_getSchemaClassDefinition_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected p_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
    protected p_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected p_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected p_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    protected p_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}