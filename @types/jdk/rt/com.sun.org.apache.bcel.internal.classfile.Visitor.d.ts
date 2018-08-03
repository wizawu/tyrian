declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace bcel {
                    namespace internal {
                        namespace classfile {
                            interface Visitor {
                                visitCode(arg0: com.sun.org.apache.bcel.internal.classfile.Code): void
                                visitCodeException(arg0: com.sun.org.apache.bcel.internal.classfile.CodeException): void
                                visitConstantClass(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantClass): void
                                visitConstantDouble(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantDouble): void
                                visitConstantFieldref(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantFieldref): void
                                visitConstantFloat(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantFloat): void
                                visitConstantInteger(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantInteger): void
                                visitConstantInterfaceMethodref(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantInterfaceMethodref): void
                                visitConstantLong(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantLong): void
                                visitConstantMethodref(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantMethodref): void
                                visitConstantNameAndType(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantNameAndType): void
                                visitConstantPool(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantPool): void
                                visitConstantString(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantString): void
                                visitConstantUtf8(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantUtf8): void
                                visitConstantValue(arg0: com.sun.org.apache.bcel.internal.classfile.ConstantValue): void
                                visitDeprecated(arg0: com.sun.org.apache.bcel.internal.classfile.Deprecated): void
                                visitExceptionTable(arg0: com.sun.org.apache.bcel.internal.classfile.ExceptionTable): void
                                visitField(arg0: com.sun.org.apache.bcel.internal.classfile.Field): void
                                visitInnerClass(arg0: com.sun.org.apache.bcel.internal.classfile.InnerClass): void
                                visitInnerClasses(arg0: com.sun.org.apache.bcel.internal.classfile.InnerClasses): void
                                visitJavaClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass): void
                                visitLineNumber(arg0: com.sun.org.apache.bcel.internal.classfile.LineNumber): void
                                visitLineNumberTable(arg0: com.sun.org.apache.bcel.internal.classfile.LineNumberTable): void
                                visitLocalVariable(arg0: com.sun.org.apache.bcel.internal.classfile.LocalVariable): void
                                visitLocalVariableTable(arg0: com.sun.org.apache.bcel.internal.classfile.LocalVariableTable): void
                                visitLocalVariableTypeTable(arg0: com.sun.org.apache.bcel.internal.classfile.LocalVariableTypeTable): void
                                visitMethod(arg0: com.sun.org.apache.bcel.internal.classfile.Method): void
                                visitSignature(arg0: com.sun.org.apache.bcel.internal.classfile.Signature): void
                                visitSourceFile(arg0: com.sun.org.apache.bcel.internal.classfile.SourceFile): void
                                visitSynthetic(arg0: com.sun.org.apache.bcel.internal.classfile.Synthetic): void
                                visitUnknown(arg0: com.sun.org.apache.bcel.internal.classfile.Unknown): void
                                visitStackMap(arg0: com.sun.org.apache.bcel.internal.classfile.StackMap): void
                                visitStackMapEntry(arg0: com.sun.org.apache.bcel.internal.classfile.StackMapEntry): void
                            }
                        }
                    }
                }
            }
        }
    }
}