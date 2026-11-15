!include "MUI2.nsh"

;--------------------------------
; Define custom installer pages
;--------------------------------

!define MUI_WELCOMEPAGE_TITLE "Welcome to Tessel Setup"
!define MUI_WELCOMEPAGE_TEXT "Thank you for choosing Tessel! This wizard will guide you through the installation."
!insertmacro MUI_PAGE_WELCOME

!insertmacro MUI_PAGE_LICENSE "${BUILD_RESOURCES_DIR}/license.txt"

!insertmacro MUI_PAGE_DIRECTORY

!insertmacro MUI_PAGE_INSTFILES

!define MUI_FINISHPAGE_RUN "$INSTDIR\Tessel.exe"
!insertmacro MUI_PAGE_FINISH

;--------------------------------
; Set installer attributes and sections
;--------------------------------

Section "Install"
  SetOutPath "$INSTDIR"
  
  ; Creates the uninstaller in the installation folder.
  WriteUninstaller "$INSTDIR\uninstall.exe"
  
  ; Desktop shortcut creation (consistent name)
  CreateShortcut "$DESKTOP\Tessel.lnk" "$INSTDIR\Tessel.exe"

  ; Start Menu shortcut creation (consistent name)
  CreateDirectory "$SMPROGRAMS\Tessel"
  CreateShortcut "$SMPROGRAMS\Tessel\Tessel.lnk" "$INSTDIR\Tessel.exe"

SectionEnd

;--------------------------------
; Uninstaller
;--------------------------------

Section "Uninstall"
  ; Removes shortcuts with correct names
  Delete "$DESKTOP\Tessel.lnk"
  Delete "$SMPROGRAMS\Tessel\Tessel.lnk"
  
  ; Removes Start Menu folder
  RMDir "$SMPROGRAMS\Tessel"

  ; This line removes all files from the installation folder.
  RMDir /r "$INSTDIR"
SectionEnd
