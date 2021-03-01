declare namespace java {
  namespace net {

    abstract class JarURLConnection extends java.net.URLConnection {

      protected jarFileURLConnection: java.net.URLConnection
      protected constructor(arg0: java.net.URL)
      public getJarFileURL(): java.net.URL
      public getEntryName(): java.lang.String
      public abstract getJarFile(): java.util.jar.JarFile
      public getManifest(): java.util.jar.Manifest
      public getJarEntry(): java.util.jar.JarEntry
      public getAttributes(): java.util.jar.Attributes
      public getMainAttributes(): java.util.jar.Attributes
      public getCertificates(): java.security.cert.Certificate[]
    }

  }
}
