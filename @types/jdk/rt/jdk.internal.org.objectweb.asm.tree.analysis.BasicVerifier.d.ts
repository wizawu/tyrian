declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
class BasicVerifier extends jdk.internal.org.objectweb.asm.tree.analysis.BasicInterpreter {
    public constructor()
    protected constructor(arg0: int)
    public copyOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
    public unaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
    public binaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
    public ternaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda, arg3: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
    public naryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: java.util.List<jdk.internal.org.objectweb.asm.tree.analysis.BasicValue>): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
    public returnOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): void
    protected isArrayValue(arg0: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): boolean
    protected getElementValue(arg0: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.BasicValue
    protected isSubTypeOf(arg0: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda, arg1: jdk.internal.org.objectweb.asm.tree.analysis.BasicValue | jdk.internal.org.objectweb.asm.tree.analysis.BasicValue$$Lambda): boolean
    public returnOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): void
    public naryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: java.util.List): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public ternaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg3: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public binaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public unaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public copyOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}