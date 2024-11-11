<script>
  import { highlightCode } from '$lib/utils.js';
  highlightCode('java');
</script>

<h1>Spring</h1>

<p>
  The <b>Spring Framework</b> is divided into modules, the heart of which are the modules of the core container, which includes a configuration model and a dependency injection mechanism. Spring also has modules supporting different application architectures such as messaging, transactional data and persistance, and web. It also has the Servlet-based Spring MVC web framework.
</p>

<h3>Servlets</h3>

<p>
  <b>Jakarta</b> (formerly <b>Java</b>) <b>Servlets</b> are Java classes in Jakarta EE that conform to the Jakarta Servlet API (found in <code>javax.servlet</code>), which specifies how classes respond to requests, typically extending the <code>HttpServlet</code> class, which is a subclass of <code>GenericServlet</code>. Ultimately, a servlet is an object that receives a request and responds to it.
</p>

<p>
  Servlet are deployed and run by <b>web containers</b>, which manage their lifecycle, map specific URLs to them, and ensuring access rights.
</p>

<p>
  Servlets have three central methods: <code>init</code>, <code>service</code>, and <code>destroy</code>.
</p>

<h3>Spring</h3>

<p>
  Spring was first written in 2003 as a response to the complexity of the early J2EE specifications. Today the Spring framework integrates with individual specifications from the traditional EE umbrella, such as the Servlet API, the WebSocket API, Concurrency Utilities, the JSON Binding API, Bean Validation, and others. It also optionally supports the Dependency Injection and Common Annotations specs in lieu of the Spring-specific alternative mechanisms.
</p>

<p>
  Spring 6.0 has been upgraded to Jakarta EE 9, Tomcat 10.1, Jetty 11, Undertow 2.3 and the Hibernate ORM 6.1.
</p>

<h2>Core Technologies</h2>

<h3>The IoC Container</h3>

<p>
  The Spring Framework implements the <b>Inversion of Control (IoC) principle</b>. <b>Dependency Injection (DI)</b> is a specialized form of IoC where objects define their dependencies only through constructor arguments, arguments to a factory method, or properties that are set on an object instance after it's constructed or returned from a factory. The IoC container then injects those dependencies when it creates the bean. It's called "inversion" because it's the opposite of the bean itself controlling the instantiation of it's dependencies itself. A <b>bean</b> is a Java object that is instantiated, assembled, and managed by a Spring IoC container.
</p>

<p>
  <code>org.springframework.beans</code> and <code>org.springframework.context</code> are the main packages forming the basis of Spring's IoC container. The <code>BeanFactory</code> interface provides a configuration mechanism capable of managing any type of object, and <code>ApplicationContext</code>, a sub-interface of <code>BeanFactory</code>, has some additional baked-in nice features. <code>BeanFactory</code> provides the configuration framework and basic functionality and <code>ApplicationContext</code> adds more entrprise-specific functionality.
</p>

<h4>Containers</h4>

<p>
  <code>org.springframework.context.ApplicationContext</code> is an interface representing the Spring IoC container and is responsible for instantiating, configuring, and assembling beans. It receives instructions on which components to manage by reading configuration metadata, which can be in annotated component classes, configuration classes with factory methods, or external XML or Groovy scripts.
</p>

<p>
  In core Spring, the most commonly used implementations of <code>ApplicationContext</code> are <code>AnnotationConfigApplicationContext</code> or <code>ClassPathXmlApplicationContext</code>. Most of the time you won't need to instatiate any instances of a Spring IoC container-- for a plain old web app, a simple boilerplate web descriptor XML file will do it for you, and in Spring Boot the application context is implicitly bootstrapped for you based on common conventions.
</p>

<h4>Configuration Metadata</h4>

<p>
  Spring consumes <b>configuration metadata</b> that instructs it on how to instantiate, configure, and assemble the objects in your application. Configuration consists of one or more bean definition for the container to manage. It can come via Java, through annotations, or in <code>{`<bean>`}</code> elements (that specify the class name) in an external XML configuration file.
</p>

<p>
  For XML-based configuration, the locations of the XML resources need to be passed to the constructor of a <code>ClassPathXmlApplicationContext</code> object that lets the container load the configuration files:
</p>

<pre><code>ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");</code></pre>

<p>
  You can also use multiple XML files by linking additional ones using an <code>{`<import>`}</code> tag.
</p>

<h4>The Container</h4>

<p>
  <code>ApplicationContext</code> maintains a registry of beans and their dependencies, which can be queried with the <code>getBean</code> method:
</p>

<pre><code>// create and configure beans
ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");

// retrieve configured instance
PetStoreService service = context.getBean("petStore", PetStoreService.class);

// use configured instance
List&lt;String&gt; userList = service.getUsernameList();</code></pre>

<p>
  You could also use a <code>GenericApplicationContext</code> with <b>reader delegates</b>, such as <code>XmlBeanDefinitionReader</code> for XML files, like:
</p>

<pre><code>GenericApplicationContext context = new GenericApplicationContext();
  new XmlBeanDefinitionReader(context).loadBeanDefinitions("services.xml", "daos.xml");
  context.refresh();</code></pre>

<p>
  Ideally, your application code never uses <code>getBean</code>, ideally Spring's dependency injection and declaring the dependencies between your beans through metadata should take care of things for you.
</p>