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
`,
`
interface package-info {
}
`,
`
public final class com.sun.beans.WeakCache<K, V> {
  public com.sun.beans.WeakCache();
  public V get(K);
  public void put(K, V);
  public void clear();
}
`,
`public interface com.sun.jdi.VirtualMachine extends com.sun.jdi.Mirror {
  public static final int TRACE_NONE;
  public static final int TRACE_SENDS;
  public static final int TRACE_RECEIVES;
  public static final int TRACE_EVENTS;
  public static final int TRACE_REFTYPES;
  public static final int TRACE_OBJREFS;
  public static final int TRACE_ALL;
  public abstract java.util.List<com.sun.jdi.ReferenceType> classesByName(java.lang.String);
  public abstract java.util.List<com.sun.jdi.ReferenceType> allClasses();
  public abstract void redefineClasses(java.util.Map<? extends com.sun.jdi.ReferenceType, byte[]>);
  public abstract java.util.List<com.sun.jdi.ThreadReference> allThreads();
  public abstract void suspend();
  public abstract void resume();
  public abstract java.util.List<com.sun.jdi.ThreadGroupReference> topLevelThreadGroups();
  public abstract com.sun.jdi.event.EventQueue eventQueue();
  public abstract com.sun.jdi.request.EventRequestManager eventRequestManager();
  public abstract com.sun.jdi.BooleanValue mirrorOf(boolean);
  public abstract com.sun.jdi.ByteValue mirrorOf(byte);
  public abstract com.sun.jdi.CharValue mirrorOf(char);
  public abstract com.sun.jdi.ShortValue mirrorOf(short);
  public abstract com.sun.jdi.IntegerValue mirrorOf(int);
  public abstract com.sun.jdi.LongValue mirrorOf(long);
  public abstract com.sun.jdi.FloatValue mirrorOf(float);
  public abstract com.sun.jdi.DoubleValue mirrorOf(double);
  public abstract com.sun.jdi.StringReference mirrorOf(java.lang.String);
  public abstract com.sun.jdi.VoidValue mirrorOfVoid();
  public abstract java.lang.Process process();
  public abstract void dispose();
  public abstract void exit(int);
  public abstract boolean canWatchFieldModification();
  public abstract boolean canWatchFieldAccess();
  public abstract boolean canGetBytecodes();
  public abstract boolean canGetSyntheticAttribute();
  public abstract boolean canGetOwnedMonitorInfo();
  public abstract boolean canGetCurrentContendedMonitor();
  public abstract boolean canGetMonitorInfo();
  public abstract boolean canUseInstanceFilters();
  public abstract boolean canRedefineClasses();
  public abstract boolean canAddMethod();
  public abstract boolean canUnrestrictedlyRedefineClasses();
  public abstract boolean canPopFrames();
  public abstract boolean canGetSourceDebugExtension();
  public abstract boolean canRequestVMDeathEvent();
  public abstract boolean canGetMethodReturnValues();
  public abstract boolean canGetInstanceInfo();
  public abstract boolean canUseSourceNameFilters();
  public abstract boolean canForceEarlyReturn();
  public abstract boolean canBeModified();
  public abstract boolean canRequestMonitorEvents();
  public abstract boolean canGetMonitorFrameInfo();
  public abstract boolean canGetClassFileVersion();
  public abstract boolean canGetConstantPool();
  public abstract void setDefaultStratum(java.lang.String);
  public abstract java.lang.String getDefaultStratum();
  public abstract long[] instanceCounts(java.util.List<? extends com.sun.jdi.ReferenceType>);
  public abstract java.lang.String description();
  public abstract java.lang.String version();
  public abstract java.lang.String name();
  public abstract void setDebugTraceMode(int);
}
`
].forEach(function(source) {
    console.log(parseClass(source))
})