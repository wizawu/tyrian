var parseClass = require("./parseClass");

[
`
public class sun.nio.cs.ext.MS932_0213$Encoder extends sun.nio.cs.ext.SJIS_0213$Encoder {
  static sun.nio.cs.ext.DoubleByte$Encoder encMS932;
  protected sun.nio.cs.ext.MS932_0213$Encoder(java.nio.charset.Charset);
  protected int encodeChar(char);
  static {};
}
`,
`
final class org.classpath.icedtea.pulseaudio.PulseAudioTargetPort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
  org.classpath.icedtea.pulseaudio.PulseAudioTargetPort(java.lang.String);
  public void open();
  public void close();
  public native byte[] native_set_volume(float);
  public native byte[] native_update_volume();
  public javax.sound.sampled.Line$Info getLineInfo();
  static {};
}
`,
`
final class org.classpath.icedtea.pulseaudio.EventLoop implements java.lang.Runnable {
  final java.lang.Object threadLock;
  static final boolean $assertionsDisabled;
  static synchronized org.classpath.icedtea.pulseaudio.EventLoop getEventLoop();
  void setAppName(java.lang.String);
  void setServer(java.lang.String);
  public void run();
  void addContextListener(org.classpath.icedtea.pulseaudio.ContextListener);
  void removeContextListener(org.classpath.icedtea.pulseaudio.ContextListener);
  long getStatus();
  void update(long);
  byte[] getContextPointer();
  byte[] getMainLoopPointer();
  synchronized java.util.List<java.lang.String> updateTargetPortNameList();
  protected synchronized java.util.List<java.lang.String> updateSourcePortNameList();
  public void source_callback(java.lang.String);
  public void sink_callback(java.lang.String);
  static {};
}
`,
`
public class sun.nio.cs.ext.ExtendedCharsets extends sun.nio.cs.AbstractCharsetProvider {
  static volatile sun.nio.cs.ext.ExtendedCharsets instance;
  public sun.nio.cs.ext.ExtendedCharsets();
  protected void init();
  public static java.lang.String[] aliasesFor(java.lang.String);
  static {};
}
`,
`
public abstract class com.oracle.webservices.internal.api.message.BaseDistributedPropertySet extends com.oracle.webservices.internal.api.message.BasePropertySet implements com.oracle.webservices.internal.api.message.DistributedPropertySet {
  public com.oracle.webservices.internal.api.message.BaseDistributedPropertySet();
  public void addSatellite(com.oracle.webservices.internal.api.message.PropertySet);
  public void addSatellite(java.lang.Class<? extends com.oracle.webservices.internal.api.message.PropertySet>, com.oracle.webservices.internal.api.message.PropertySet);
  public void removeSatellite(com.oracle.webservices.internal.api.message.PropertySet);
  public void copySatelliteInto(com.oracle.webservices.internal.api.message.DistributedPropertySet);
  public void copySatelliteInto(com.oracle.webservices.internal.api.message.MessageContext);
  public <T extends com.oracle.webservices.internal.api.message.PropertySet> T getSatellite(java.lang.Class<T>);
  public java.util.Map<java.lang.Class<? extends com.oracle.webservices.internal.api.message.PropertySet>, com.oracle.webservices.internal.api.message.PropertySet> getSatellites();
  public java.lang.Object get(java.lang.Object);
  public java.lang.Object put(java.lang.String, java.lang.Object);
  public boolean containsKey(java.lang.Object);
  public boolean supports(java.lang.Object);
  public java.lang.Object remove(java.lang.Object);
  protected void createEntrySet(java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>);
  protected java.util.Map<java.lang.String, java.lang.Object> asMapLocal();
  protected boolean supportsLocal(java.lang.Object);
  protected java.util.Map<java.lang.String, java.lang.Object> createView();
  static java.util.Map access$000(com.oracle.webservices.internal.api.message.BaseDistributedPropertySet);
  static java.util.Map access$100(com.oracle.webservices.internal.api.message.BaseDistributedPropertySet);
}
`
].forEach(function(source) {
    console.log(parseClass(source))
})