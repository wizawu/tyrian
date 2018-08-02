declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    namespace tree {
                        namespace analysis {
class SourceInterpreter extends jdk.internal.org.objectweb.asm.tree.analysis.Interpreter<jdk.internal.org.objectweb.asm.tree.analysis.SourceValue> implements jdk.internal.org.objectweb.asm.Opcodes {
    public constructor()
    protected constructor(arg0: int)
    public newValue(arg0: jdk.internal.org.objectweb.asm.Type): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public newOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public copyOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public unaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public binaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public ternaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda, arg3: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public naryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: java.util.List<jdk.internal.org.objectweb.asm.tree.analysis.SourceValue>): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public returnOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda): void
    public merge(arg0: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda, arg1: jdk.internal.org.objectweb.asm.tree.analysis.SourceValue | jdk.internal.org.objectweb.asm.tree.analysis.SourceValue$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.SourceValue
    public merge(arg0: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public returnOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): void
    public naryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: java.util.List): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public ternaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg3: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public binaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda, arg2: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public unaryOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public copyOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode, arg1: jdk.internal.org.objectweb.asm.tree.analysis.Value | jdk.internal.org.objectweb.asm.tree.analysis.Value$$Lambda): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public newOperation(arg0: jdk.internal.org.objectweb.asm.tree.AbstractInsnNode): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public newValue(arg0: jdk.internal.org.objectweb.asm.Type): jdk.internal.org.objectweb.asm.tree.analysis.Value
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}