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
`
].forEach(function(source) {
    console.log(parseClass(source))
})