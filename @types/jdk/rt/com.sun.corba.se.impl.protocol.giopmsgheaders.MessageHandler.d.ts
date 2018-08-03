declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
                            interface MessageHandler {
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage_1_0): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage_1_1): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage_1_2): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage_1_0): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage_1_1): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage_1_2): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage_1_0): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage_1_1): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage_1_2): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage_1_0): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage_1_1): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage_1_2): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage_1_1): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage_1_2): void
                                handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.CancelRequestMessage): void
                            }
                        }
                    }
                }
            }
        }
    }
}