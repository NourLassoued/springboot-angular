package tn.spring.pispring.config.JWT.Security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;
import tn.spring.pispring.config.JWT.JwtAuthEntryPoint;
import tn.spring.pispring.config.JWT.JwtAuthTokenFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    server.servlet.context-path=/nour
    spring.datasource.url=jdbc:mysql://localhost:3306/nour?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC

            ###spring.datasource.url=jdbc:mysql://localhost:3306/pi_dev_dbbb
    spring.datasource.username=root
    spring.datasource.password=
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
    spring.jpa.hibernate.ddl-auto=update
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver


    spring.mvc.pathmatch.matching-strategy=ant-path-matcher



    server.port=8081

}
