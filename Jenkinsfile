pipeline  {
    agent {
        dockerfile true
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'node --version'
                sh 'npm install'
            }
        }                

        stage ('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage ('Test and validate') {
            steps {
                sh 'npm test'
            }
        }
    }
    post { 
        success { 
            mattermostSend endpoint: "${ENDPOINT}" , channel: 'sdk_build_bot', color: 'blue', message: "Success ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        } 
        failure {
            mattermostSend endpoint: "${ENDPOINT}" , channel: 'sdk_build_bot', color: 'red', message: "Failure ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        }
        unstable {
            mattermostSend endpoint: "${ENDPOINT}" , channel: 'sdk_build_bot', color: 'yellow', message: "Unstable ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        }
    }
}