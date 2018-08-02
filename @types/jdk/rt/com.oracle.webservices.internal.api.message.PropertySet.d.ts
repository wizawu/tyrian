declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace message {
                        interface PropertySet {
                            containsKey(arg0: java.lang.Object): boolean
                            get(arg0: java.lang.Object): java.lang.Object
                            put(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                            supports(arg0: java.lang.Object): boolean
                            remove(arg0: java.lang.Object): java.lang.Object
                            createMapView(): java.util.Map<java.lang.String, java.lang.Object>
                            asMap(): java.util.Map<java.lang.String, java.lang.Object>
                        }
                    }
                }
            }
        }
    }
}