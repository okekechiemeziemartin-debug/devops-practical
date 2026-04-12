pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
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
