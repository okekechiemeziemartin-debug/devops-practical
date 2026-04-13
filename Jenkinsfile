pipeline {
  agent any
  environment {
    PATH = "/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        echo 'Build stage complete.'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy stage complete.'
      }
    }
  }
}
