import org.junit.After
import org.junit.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import orsql.ConnectOptions
import orsql.MySQLConnection

data class User(
        val firstname: String,
        val lastname: String,
        val age: Int
)

class MySQLConnectionTest {
    var connection: MySQLConnection? = null

    @Before
    fun connect() {
        val options = ConnectOptions("localhost", 3306, "test", "root", "root")
        connection = MySQLConnection(options)
    }

    @Test
    fun one() {
        val user = connection!!.one<User>(
                User::class.java,
                "SELECT * FROM user WHERE lastname = ?",
                arrayOf("Zhang")
        )
        assertEquals(user!!.firstname, "Jenny")
        assertEquals(user.age, 16)
    }

    @Test
    fun list() {
        val users = connection!!.list<User>(
                User::class.java,
                "SELECT * FROM user WHERE age = ?",
                arrayOf(17)
        )
        assertEquals(users.size, 2)
        assertEquals(users[0].lastname.toLowerCase(), "wu")
    }

    @After
    fun close() {
        connection!!.close()
    }
}
