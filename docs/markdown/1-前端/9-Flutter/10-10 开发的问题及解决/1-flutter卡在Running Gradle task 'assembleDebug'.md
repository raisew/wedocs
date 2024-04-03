# flutter 卡在 Running Gradle task 'assembleDebug'...

1、问题：用安卓模拟器打开 `flutter` 项目时候，一直卡在 `Running Gradle task 'assembleDebug'...`

2、原因：这是因为 `android studio` 运行项目时需要请求部分资源，而请求外网资源，你懂的...

3、解决：解决方法:1、翻\*墙 。2 换源

我采用的方法是换阿里源

注意： `public` 路径是 `http` 的，会报错，要用 `https`
错误：maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
正确：maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }

- 修改 `Flutter` 安装目录下的文件：`flutter\packages\flutter_tools\gradle/flutter.gradle`

```java
repositories {
// google()
// mavenCentral()
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }
}

class FlutterPlugin implements Plugin<Project> {
// private static final String DEFAULT_MAVEN_HOST = "https://storage.googleapis.com";
private static final String DEFAULT_MAVEN_HOST = "https://storage.flutter-io.cn";
...}

```

- 修改 `Flutter` 安装目录下的文件：`flutter\packages\flutter_tools\gradle/resolve_dependencies.gradle`

```java
repositories {
// google()
// mavenCentral()
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }
maven {
// url "$storageUrl/download.flutter.io"
url "https://storage.flutter-io.cn/download.flutter.io"
}
}
```

- 修改项目目录的文件：`android\build.gradle`

```java
buildscript {
    ext.kotlin_version = '1.9.22'
    repositories {
        // google()
        // mavenCentral()
        maven {
        allowInsecureProtocol = true
        url 'https://maven.aliyun.com/repository/google'
        }
        maven {
        allowInsecureProtocol = true
        url 'https://maven.aliyun.com/repository/jcenter'
        }
        maven {
        allowInsecureProtocol = true
        url 'http://maven.aliyun.com/nexus/content/groups/public'
        }
    }

    dependencies {
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}

allprojects {
    repositories {
        // google()
        // mavenCentral()
        maven {
            url "https://storage.googleapis.com/download.flutter.io"
        }
        maven {
        allowInsecureProtocol = true
        url 'https://maven.aliyun.com/repository/google'
        }
        maven {
        allowInsecureProtocol = true
        url 'https://maven.aliyun.com/repository/jcenter'
        }
        maven {
        allowInsecureProtocol = true
        url 'http://maven.aliyun.com/nexus/content/groups/public'
        }
    }
}

rootProject.buildDir = '../build'
subprojects {
    project.buildDir = "${rootProject.buildDir}/${project.name}"
}
subprojects {
    project.evaluationDependsOn(':app')
}

tasks.register("clean", Delete) {
    delete rootProject.buildDir
}

```

- 修改 `android/gradle` 目录下: `android\gradle\wrapper\gradle-wrapper.properties`

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.0.2-all.zip
```
