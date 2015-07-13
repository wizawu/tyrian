const {
    Mockxhr,
} = global.__;

Mockxhr.setMock(true);

Mockxhr.mock(
    "POST",
    "/login",
    data => {
        return {
            "user": data.user,
            "email": data.user + "@gmail.com"
        };
    }
);

Mockxhr.mock("POST", "/logout");
