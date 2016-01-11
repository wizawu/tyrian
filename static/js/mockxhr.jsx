const mockxhr = require("mockxhr");

mockxhr.setMock(true);

mockxhr.mock(
    "POST",
    "/login",
    data => {
        return {
            "user": data.user,
            "email": data.user + "@gmail.com",
        };
    }
);

mockxhr.mock("POST", "/logout");
