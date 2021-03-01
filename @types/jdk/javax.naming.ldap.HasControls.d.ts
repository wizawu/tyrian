declare namespace javax {
  namespace naming {
    namespace ldap {

      interface HasControls {

        getControls(): javax.naming.ldap.Control[]
      }

    }
  }
}
