const parseClass = require("./parseClass")

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
`,
`
abstract class com.sun.beans.finder.AbstractFinder<T extends java.lang.reflect.Executable> {
  protected com.sun.beans.finder.AbstractFinder(java.lang.Class<?>[]);
  protected boolean isValid(T);
  final T find(T[]) throws java.lang.NoSuchMethodException;
}
`,
`
public class com.sun.tools.javac.parser.JavacParser implements com.sun.tools.javac.parser.Parser {
  protected com.sun.tools.javac.parser.Lexer S;
  protected com.sun.tools.javac.tree.TreeMaker F;
  boolean allowGenerics;
  boolean allowDiamond;
  boolean allowMulticatch;
  boolean allowVarargs;
  boolean allowAsserts;
  boolean allowEnums;
  boolean allowForeach;
  boolean allowStaticImport;
  boolean allowAnnotations;
  boolean allowTWR;
  boolean allowStringFolding;
  boolean allowLambda;
  boolean allowMethodReferences;
  boolean allowDefaultMethods;
  boolean allowStaticInterfaceMethods;
  boolean allowIntersectionTypesInCast;
  boolean keepDocComments;
  boolean keepLineMap;
  boolean allowTypeAnnotations;
  boolean allowAnnotationsAfterTypeParams;
  boolean allowThisIdent;
  com.sun.tools.javac.tree.JCTree$JCVariableDecl receiverParam;
  static final int EXPR;
  static final int TYPE;
  static final int NOPARAMS;
  static final int TYPEARG;
  static final int DIAMOND;
  protected com.sun.tools.javac.parser.Tokens$Token token;
  java.util.ArrayList<com.sun.tools.javac.tree.JCTree$JCExpression[]> odStackSupply;
  java.util.ArrayList<com.sun.tools.javac.parser.Tokens$Token[]> opStackSupply;
  com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind> LAX_IDENTIFIER;
  static final boolean $assertionsDisabled;
  protected com.sun.tools.javac.parser.JavacParser(com.sun.tools.javac.parser.ParserFactory, com.sun.tools.javac.parser.Lexer, boolean, boolean, boolean);
  protected com.sun.tools.javac.parser.JavacParser$AbstractEndPosTable newEndPosTable(boolean);
  protected com.sun.tools.javac.tree.DocCommentTable newDocCommentTable(boolean, com.sun.tools.javac.parser.ParserFactory);
  public com.sun.tools.javac.parser.Tokens$Token token();
  public void nextToken();
  protected boolean peekToken(com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>);
  protected boolean peekToken(int, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>);
  protected boolean peekToken(com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>);
  protected boolean peekToken(int, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>);
  protected boolean peekToken(com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>);
  protected boolean peekToken(int, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>);
  protected boolean peekToken(com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>...);
  protected boolean peekToken(int, com.sun.tools.javac.util.Filter<com.sun.tools.javac.parser.Tokens$TokenKind>...);
  public void accept(com.sun.tools.javac.parser.Tokens$TokenKind);
  com.sun.tools.javac.tree.JCTree$JCExpression illegal(int);
  com.sun.tools.javac.tree.JCTree$JCExpression illegal();
  void checkNoMods(long);
  void attach(com.sun.tools.javac.tree.JCTree, com.sun.tools.javac.parser.Tokens$Comment);
  public int getStartPos(com.sun.tools.javac.tree.JCTree);
  public int getEndPos(com.sun.tools.javac.tree.JCTree);
  public com.sun.tools.javac.util.Name ident();
  public com.sun.tools.javac.tree.JCTree$JCExpression qualident(boolean);
  com.sun.tools.javac.tree.JCTree$JCExpression literal(com.sun.tools.javac.util.Name);
  com.sun.tools.javac.tree.JCTree$JCExpression literal(com.sun.tools.javac.util.Name, int);
  boolean isZero(java.lang.String);
  java.lang.String strval(com.sun.tools.javac.util.Name);
  public com.sun.tools.javac.tree.JCTree$JCExpression parseExpression();
  public com.sun.tools.javac.tree.JCTree$JCExpression parseType();
  public com.sun.tools.javac.tree.JCTree$JCExpression parseType(com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCAnnotation>);
  public com.sun.tools.javac.tree.JCTree$JCExpression unannotatedType();
  com.sun.tools.javac.tree.JCTree$JCExpression term(int);
  com.sun.tools.javac.tree.JCTree$JCExpression term();
  com.sun.tools.javac.tree.JCTree$JCExpression termRest(com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression term1();
  com.sun.tools.javac.tree.JCTree$JCExpression term1Rest(com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression term2();
  com.sun.tools.javac.tree.JCTree$JCExpression term2Rest(com.sun.tools.javac.tree.JCTree$JCExpression, int);
  protected com.sun.tools.javac.tree.JCTree$JCExpression foldStrings(com.sun.tools.javac.tree.JCTree$JCExpression);
  boolean merge(com.sun.tools.javac.util.ListBuffer<com.sun.tools.javac.tree.JCTree$JCLiteral>, com.sun.tools.javac.util.ListBuffer<com.sun.tools.javac.tree.JCTree$JCExpression>);
  protected com.sun.tools.javac.tree.JCTree$JCExpression term3();
  com.sun.tools.javac.tree.JCTree$JCExpression term3Rest(com.sun.tools.javac.tree.JCTree$JCExpression, com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression>);
  boolean isUnboundMemberRef();
  com.sun.tools.javac.parser.JavacParser$ParensResult analyzeParens();
  com.sun.tools.javac.tree.JCTree$JCExpression lambdaExpressionOrStatement(boolean, boolean, int);
  com.sun.tools.javac.tree.JCTree$JCExpression lambdaExpressionOrStatementRest(com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCVariableDecl>, int);
  com.sun.tools.javac.tree.JCTree$JCExpression lambdaStatement(com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCVariableDecl>, int, int);
  com.sun.tools.javac.tree.JCTree$JCExpression lambdaExpression(com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCVariableDecl>, int);
  com.sun.tools.javac.tree.JCTree$JCExpression superSuffix(com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression>, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCPrimitiveTypeTree basicType();
  com.sun.tools.javac.tree.JCTree$JCExpression argumentsOpt(com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression>, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> arguments();
  com.sun.tools.javac.tree.JCTree$JCMethodInvocation arguments(com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression>, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression typeArgumentsOpt(com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> typeArgumentsOpt();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> typeArgumentsOpt(int);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> typeArguments(boolean);
  com.sun.tools.javac.tree.JCTree$JCExpression typeArgument();
  com.sun.tools.javac.tree.JCTree$JCTypeApply typeArguments(com.sun.tools.javac.tree.JCTree$JCExpression, boolean);
  com.sun.tools.javac.tree.JCTree$JCExpression bracketsSuffix(com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression memberReferenceSuffix(com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression memberReferenceSuffix(int, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression creator(int, com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression>);
  com.sun.tools.javac.tree.JCTree$JCExpression innerCreator(int, com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression>, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression arrayCreatorRest(int, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCNewClass classCreatorRest(int, com.sun.tools.javac.tree.JCTree$JCExpression, com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression>, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCExpression arrayInitializer(int, com.sun.tools.javac.tree.JCTree$JCExpression);
  public com.sun.tools.javac.tree.JCTree$JCExpression variableInitializer();
  com.sun.tools.javac.tree.JCTree$JCExpression parExpression();
  com.sun.tools.javac.tree.JCTree$JCBlock block(int, long);
  public com.sun.tools.javac.tree.JCTree$JCBlock block();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCStatement> blockStatements();
  com.sun.tools.javac.tree.JCTree$JCStatement parseStatementAsBlock();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCStatement> blockStatement();
  public com.sun.tools.javac.tree.JCTree$JCStatement parseStatement();
  protected com.sun.tools.javac.tree.JCTree$JCCatch catchClause();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> catchTypes();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCCase> switchBlockStatementGroups();
  protected com.sun.tools.javac.tree.JCTree$JCCase switchBlockStatementGroup();
  <T extends com.sun.tools.javac.util.ListBuffer<? super com.sun.tools.javac.tree.JCTree$JCExpressionStatement>> T moreStatementExpressions(int, com.sun.tools.javac.tree.JCTree$JCExpression, T);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCStatement> forInit();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpressionStatement> forUpdate();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCAnnotation> annotationsOpt(com.sun.tools.javac.tree.JCTree$Tag);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCAnnotation> typeAnnotationsOpt();
  com.sun.tools.javac.tree.JCTree$JCModifiers modifiersOpt();
  protected com.sun.tools.javac.tree.JCTree$JCModifiers modifiersOpt(com.sun.tools.javac.tree.JCTree$JCModifiers);
  com.sun.tools.javac.tree.JCTree$JCModifiers mods(int, long, com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCAnnotation>);
  com.sun.tools.javac.tree.JCTree$JCAnnotation annotation(int, com.sun.tools.javac.tree.JCTree$Tag);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> annotationFieldValuesOpt();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> annotationFieldValues();
  com.sun.tools.javac.tree.JCTree$JCExpression annotationFieldValue();
  com.sun.tools.javac.tree.JCTree$JCExpression annotationValue();
  public <T extends com.sun.tools.javac.util.ListBuffer<? super com.sun.tools.javac.tree.JCTree$JCVariableDecl>> T variableDeclarators(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.tree.JCTree$JCExpression, T);
  <T extends com.sun.tools.javac.util.ListBuffer<? super com.sun.tools.javac.tree.JCTree$JCVariableDecl>> T variableDeclaratorsRest(int, com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.tree.JCTree$JCExpression, com.sun.tools.javac.util.Name, boolean, com.sun.tools.javac.parser.Tokens$Comment, T);
  com.sun.tools.javac.tree.JCTree$JCVariableDecl variableDeclarator(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.tree.JCTree$JCExpression, boolean, com.sun.tools.javac.parser.Tokens$Comment);
  com.sun.tools.javac.tree.JCTree$JCVariableDecl variableDeclaratorRest(int, com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.tree.JCTree$JCExpression, com.sun.tools.javac.util.Name, boolean, com.sun.tools.javac.parser.Tokens$Comment);
  com.sun.tools.javac.tree.JCTree$JCVariableDecl variableDeclaratorId(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.tree.JCTree$JCExpression);
  com.sun.tools.javac.tree.JCTree$JCVariableDecl variableDeclaratorId(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.tree.JCTree$JCExpression, boolean);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree> resources();
  protected com.sun.tools.javac.tree.JCTree resource();
  public com.sun.tools.javac.tree.JCTree$JCCompilationUnit parseCompilationUnit();
  com.sun.tools.javac.tree.JCTree importDeclaration();
  com.sun.tools.javac.tree.JCTree typeDeclaration(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.parser.Tokens$Comment);
  com.sun.tools.javac.tree.JCTree$JCStatement classOrInterfaceOrEnumDeclaration(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.parser.Tokens$Comment);
  protected com.sun.tools.javac.tree.JCTree$JCClassDecl classDeclaration(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.parser.Tokens$Comment);
  protected com.sun.tools.javac.tree.JCTree$JCClassDecl interfaceDeclaration(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.parser.Tokens$Comment);
  protected com.sun.tools.javac.tree.JCTree$JCClassDecl enumDeclaration(com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.parser.Tokens$Comment);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree> enumBody(com.sun.tools.javac.util.Name);
  com.sun.tools.javac.tree.JCTree enumeratorDeclaration(com.sun.tools.javac.util.Name);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> typeList();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree> classOrInterfaceBody(com.sun.tools.javac.util.Name, boolean);
  protected com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree> classOrInterfaceBodyDeclaration(com.sun.tools.javac.util.Name, boolean);
  protected com.sun.tools.javac.tree.JCTree methodDeclaratorRest(int, com.sun.tools.javac.tree.JCTree$JCModifiers, com.sun.tools.javac.tree.JCTree$JCExpression, com.sun.tools.javac.util.Name, com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCTypeParameter>, boolean, boolean, com.sun.tools.javac.parser.Tokens$Comment);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCExpression> qualidentList();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCTypeParameter> typeParametersOpt();
  com.sun.tools.javac.tree.JCTree$JCTypeParameter typeParameter();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCVariableDecl> formalParameters();
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCVariableDecl> formalParameters(boolean);
  com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCVariableDecl> implicitParameters(boolean);
  com.sun.tools.javac.tree.JCTree$JCModifiers optFinal(long);
  protected com.sun.tools.javac.tree.JCTree$JCVariableDecl formalParameter();
  protected com.sun.tools.javac.tree.JCTree$JCVariableDecl formalParameter(boolean);
  protected com.sun.tools.javac.tree.JCTree$JCVariableDecl implicitParameter();
  void error(int, java.lang.String, java.lang.Object...);
  void error(com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition, java.lang.String, java.lang.Object...);
  void warning(int, java.lang.String, java.lang.Object...);
  protected com.sun.tools.javac.tree.JCTree$JCExpression checkExprStat(com.sun.tools.javac.tree.JCTree$JCExpression);
  static int prec(com.sun.tools.javac.parser.Tokens$TokenKind);
  static int earlier(int, int);
  static com.sun.tools.javac.tree.JCTree$Tag optag(com.sun.tools.javac.parser.Tokens$TokenKind);
  static com.sun.tools.javac.tree.JCTree$Tag unoptag(com.sun.tools.javac.parser.Tokens$TokenKind);
  static com.sun.tools.javac.code.TypeTag typetag(com.sun.tools.javac.parser.Tokens$TokenKind);
  void checkGenerics();
  void checkVarargs();
  void checkForeach();
  void checkStaticImports();
  void checkAnnotations();
  void checkDiamond();
  void checkMulticatch();
  void checkTryWithResources();
  void checkLambda();
  void checkMethodReferences();
  void checkDefaultMethods();
  void checkIntersectionTypesInCast();
  void checkStaticInterfaceMethods();
  void checkTypeAnnotations();
  void checkAnnotationsAfterTypeParams(int);
  static {};
}
`,
`
public abstract class com.sun.jmx.mbeanserver.MBeanSupport<M> implements com.sun.jmx.mbeanserver.DynamicMBean2, javax.management.MBeanRegistration {
  <T> com.sun.jmx.mbeanserver.MBeanSupport(T, java.lang.Class<T>) throws javax.management.NotCompliantMBeanException;
  abstract com.sun.jmx.mbeanserver.MBeanIntrospector<M> getMBeanIntrospector();
  abstract java.lang.Object getCookie();
  public final boolean isMXBean();
  public abstract void register(javax.management.MBeanServer, javax.management.ObjectName) throws java.lang.Exception;
  public abstract void unregister();
  public final javax.management.ObjectName preRegister(javax.management.MBeanServer, javax.management.ObjectName) throws java.lang.Exception;
  public final void preRegister2(javax.management.MBeanServer, javax.management.ObjectName) throws java.lang.Exception;
  public final void registerFailed();
  public final void postRegister(java.lang.Boolean);
  public final void preDeregister() throws java.lang.Exception;
  public final void postDeregister();
  public final java.lang.Object getAttribute(java.lang.String) throws javax.management.AttributeNotFoundException, javax.management.MBeanException, javax.management.ReflectionException;
  public final javax.management.AttributeList getAttributes(java.lang.String[]);
  public final void setAttribute(javax.management.Attribute) throws javax.management.AttributeNotFoundException, javax.management.InvalidAttributeValueException, javax.management.MBeanException, javax.management.ReflectionException;
  public final javax.management.AttributeList setAttributes(javax.management.AttributeList);
  public final java.lang.Object invoke(java.lang.String, java.lang.Object[], java.lang.String[]) throws javax.management.MBeanException, javax.management.ReflectionException;
  public javax.management.MBeanInfo getMBeanInfo();
  public final java.lang.String getClassName();
  public final java.lang.Object getResource();
  public final java.lang.Class<?> getMBeanInterface();
}
`,
`
class com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M> extends com.sun.xml.internal.bind.v2.model.impl.TypeInfoImpl<T, C, F, M> implements com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C> {
  static final boolean $assertionsDisabled;
  public com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl(com.sun.xml.internal.bind.v2.model.impl.ModelBuilder<T, C, F, M>, com.sun.xml.internal.bind.v2.model.impl.RegistryInfoImpl<T, C, F, M>, M) throws com.sun.xml.internal.bind.v2.runtime.IllegalAnnotationException;
  final javax.xml.namespace.QName parseElementName(javax.xml.bind.annotation.XmlElementDecl);
  protected com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M>.PropertyImpl createPropertyImpl();
  public com.sun.xml.internal.bind.v2.model.core.ElementPropertyInfo<T, C> getProperty();
  public com.sun.xml.internal.bind.v2.model.core.NonElement<T, C> getContentType();
  public T getContentInMemoryType();
  public javax.xml.namespace.QName getElementName();
  public T getType();
  public final boolean canBeReferencedByIDREF();
  public com.sun.xml.internal.bind.v2.model.core.ClassInfo<T, C> getScope();
  public com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C> getSubstitutionHead();
  public java.util.Collection<? extends com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M>> getSubstitutionMembers();
  void link();
  public com.sun.xml.internal.bind.v2.runtime.Location getLocation();
  public com.sun.xml.internal.bind.v2.model.core.Element getSubstitutionHead();
  static com.sun.xml.internal.bind.v2.model.core.NonElement access$000(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static javax.xml.namespace.QName access$100(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static javax.xml.bind.annotation.XmlElementDecl access$200(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static boolean access$300(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static com.sun.xml.internal.bind.v2.model.core.Adapter access$400(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static com.sun.xml.internal.bind.v2.model.core.ID access$500(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static javax.activation.MimeType access$600(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static javax.xml.namespace.QName access$700(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static boolean access$800(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static java.lang.Object access$900(com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl);
  static {};
}
`
].forEach(function (source) {
    console.log(parseClass(source, {}))
})