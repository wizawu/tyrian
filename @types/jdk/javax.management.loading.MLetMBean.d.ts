declare namespace javax {
  namespace management {
    namespace loading {

      interface MLetMBean {
        getMBeansFromURL(arg0: java.lang.String | string): java.util.Set<java.lang.Object>
        getMBeansFromURL(arg0: java.net.URL): java.util.Set<java.lang.Object>
        addURL(arg0: java.net.URL): void
        addURL(arg0: java.lang.String | string): void
        getURLs(): java.net.URL[]
        getResource(arg0: java.lang.String | string): java.net.URL
        getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
        getResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
        getLibraryDirectory(): java.lang.String
        setLibraryDirectory(arg0: java.lang.String | string): void
      }

    }
  }
}
