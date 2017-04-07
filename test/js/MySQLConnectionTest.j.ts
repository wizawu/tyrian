const TestCase = junit.framework.TestCase
const { assertEquals } = junit.framework.Assert

class MySQLConnectionTest extends TestCase {
    testAddition() {
        assertEquals(1 + 1, 2)
    }
}

new MySQLConnectionTest().run()