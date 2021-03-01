declare namespace java {
  namespace security {
    namespace acl {

      interface Owner {

        addOwner(arg0: java.security.Principal, arg1: java.security.Principal): boolean
        deleteOwner(arg0: java.security.Principal, arg1: java.security.Principal): boolean
        isOwner(arg0: java.security.Principal): boolean
      }

    }
  }
}
