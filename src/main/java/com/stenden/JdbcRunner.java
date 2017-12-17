package com.stenden;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcRunner {
    public static void main(String... args) throws Exception {
        new JdbcRunner().run();
        System.exit(0);
    }

    private void run() throws Exception {
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/brainstorm?" +
        "user=root&password=");

        Statement statement = conn.createStatement();
        ResultSet resultSet = statement.executeQuery("select * from smarttags");

        while(resultSet.next()){
            String tag1 = resultSet.getString(1);
            String tag2 = resultSet.getString(2);
            System.out.println("Uit database: " + tag1 + ", " + tag2);
        }
        resultSet.close();
        statement.close();
    }
}
