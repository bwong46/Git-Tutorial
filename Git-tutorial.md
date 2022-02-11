# Git-Tutorial
[Youtube]Dongbinna

#### 1강 Git 설치 및 사용법 익히기
- git : git 사용법 
- git --version : git 버전


##### 연결하기
- git config --global user.name [닉네임]
- git config --global user.email [이메일주소]
- cd C:\Education
- git clone https://github.com/SGongD/Git-Tutorial.git // 다운로드

##### 깃허브에 올리기
- .txt파일 생성
- cd Git-Tutorial
- git add hello.txt(.)
- git commit -m "Add Text File [document.txt]"
- git push

#### 2강 오픈소스의 개요 및 오픈소스 활동을 하는 이유
- contribution활동을 하는 이유 : 구직을 할 때 기록으로 남기 때문에 이력으로 남아서.
- Committer : 실제로 반영을 시킬지 안시킬지 권한을 가지고 있는 사람.

#### 3강 Git이 등장한 배경과 Git의 장점
- 분산적인(합치기, Merge가능) 개발, 효율적인 개발, 비선형적인 개발(branch), 변경 이력 보장

#### 4강 Git의 동작 원리
git add > git commit > git push (<=> git pull)

#### 5강 소스코드 수정하여 Git 저장소에 반영하기
- 해당 프로젝트에 소속된 사람이 아닌 경우(Pull Request)
- 해당 프로젝트에 소속된 사람인 경우
  - 내 컴퓨터에 폴더 만들기 (cd C:\파일명)
  - 클론 진행하기 (git clone URL주소)
  - 다운받은 폴더로 이동(cd Git-Tutorial)
  - 내가 추가/수정하고 싶은 파일 작성
  - 파일의 상태 확인(git status) 
  - 파일 추가(git add 파일명) <-> 만약 내리고 싶다면(git reset 파일명)
  - 복구를 위해 commit 명령어 사용 (git commit -m "Add 파일명 [사유]) 
  - => 커밋 명령어를 잘못 썼다면 (git commit --amend)
  - 만약 깃에 추가하려는 내용을 무시하고 싶다 (git checkout -- 파일명) => 띄어쓰기 주의

#### 6강 Git에서 커밋 내역 수정하기
- 특정한 프로젝트가 언제 파일을 수정했는지
- git pull > 정확히 일치하는지
- 시점으로 돌아가기 (git reset --hard 코드값)
- 만약 특정 시점으로 돌아간 후에 Github도 똑같이 반영하고 싶다면? (git push -f)
- Add함수 add>commit 한 후 코드 내에 Sub함수를 더하여 수정했다. 
  - 이 때, 커밋 메시지를 변경하는 작업은 ? git commit --amend
  - git push -f > git add .(Sub함수를 더하기 위해) > git commit -m ~ > git push

#### 7강 Git 브랜치의 개요 및 사용해보기
- 브랜치 상세내역 알아보기 (git branch)
- 브랜치 생성하기 (git branch 브랜치명)
- 브랜치 사용하기 (git checkout 브랜치명)
- 브랜치2 add > commit 후 git checkout main으로 돌아간다.
  - main브랜치와 브랜치2를 합친다 (git merge 브랜치2) > 그럼 맨 마지막 HEAD -> main, 브랜치2
  - git push진행
- 브랜치 삭제 (git branch -d 브랜치2)

#### 8강 브랜치 충돌(Conflict) 처리하기 - 수동 처리
- 브랜치2에 Div만 설정하고 main에는 Div와 Commant모두 설정 시
  - 수동으로 파일에 들어가서 지우고 삭제한 다음 push한다.

#### 9강 Git 원격 저장소 관리하기
- git remote (git remote show origin)
- git remote add test https://github.com/SGongD/Git-Tutorial.git
- git remote -v (전체 목록 확인하기)
- git remote rename 원래이름 바꿀이름(원격저장소 이름 바꾸기)
- git remote rm 원격저장소명 (원격저장소 삭제)

#### 10강 Git 로그(Log) 다루기
- git log = Commits 
- git log --stat -> 얼마나 많은 라인이 추가되었는지
- git log -p -3 -> 커밋에 저장된 구체적인 사항(어떻게 이루어져 있는지)
- git log --pretty=oneline -> 각각의 커밋들이 한줄만에
- git log --pretty=format:"%h(해시태그) -> %an(작성자이름), %ar(작성날짜) -> %s(커밋주제)" --graph

#### 11강 Git에서 README.md파일 작성하기
- git pull -> README파일 생성해서 내 컴퓨터에 있는 파일로 가져오기

#### 12강 Git Archive 명령으로 소스코드만 압축하기
- 예시 깃 프로젝트가 있다고 가정하자.
  - git archive --format=zip main -o Master.zip
  - git archive --format=zip main -o ../Master.zip -> 상대 경로도 가능하다.

#### 13강 Git Rebase 명령으로 특정한 커밋을 수정/삭제하기
- git init -> 깃 프로젝트 초기화하기 
- git rebase -i **ID값** -> 특정 ID값의 위쪽을 확인 할 수 있다.
- git rebase -i HEAD~3 -> 최근 3개까지의 커밋 수정하기
  - 내가 선택할 커밋이 pick되어있다면 그 부분을 reword로 수정하고 :wq! 해준다.
  - 내가 삭제할 커밋이 pick되어있다면 그 부분을 drop으로 수정하고 :wq! 해준다.

#### 15강 Git Commit 날짜 변경 및 커미터 변경하기
- git rebase -i **ID값** 
- pick을 edit으로 바꿔준다.
- GIT_COMMITER_DATE="Oct 1 10:00:00 2021 +0000" git commit --amend --no-edit --date "Oct 1 10:00:00 2021 +0000"
