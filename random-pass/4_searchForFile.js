/**
 * Returns a random integer between min and max
 * @param min
 * @param max
 * @returns {*}
 */
function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateDirTree(prefix, depth){
    const dirs = ["bin","efi","fonts","locale","x86_64-efi","grub","lost+found","boot","cdrom","block","001","002","usb","bus","char","cpu","by-id","by-partlabel","by-partuuid","by-uuid","disk","dri","hugepages","by-path","input","lightnvm","mapper","mqueue","net","pts","ubuntu-amazon-default.oxide","shm","snd","ubuntu-vg","v4l","vfio","dev",".systemPrefs",".java","ImageMagick-6","VPN","conf.d","no-wait.d","pre-down.d","pre-up.d","dispatcher.d","dnsmasq-shared.d","dnsmasq.d","system-connections","NetworkManager","UPower","Xreset.d","Xresources","Xsession.d","app-defaults","cursors","Type1","misc","xinitrc.d","xinit","xkb","xsm","X11","events","acpi","alternatives","conf-available","apache2","event.d","resume.d","scripts.d","suspend.d","apm","network-interface-security","init","apparmor","apparmor_api","ubuntu-browsers.d","abstractions","cache","disable","force-complain","local","home.d","multiarch.d","xdg-user-dirs.d","tunables","apparmor.d","blacklist.d","crashdb.conf.d","native-origins.d","apport","apt.conf.d","preferences.d","sources.list.d","trusted.gpg.d","apt","high-trust-repository-whitelist.d","aptdaemon","at-spi2","services","avahi","bash_completion.d","binfmt.d","bluetooth","Attributes","Contraction","al","at","ba","bd","bg","bl","bm","bn","bp","cb","ce","ec","eu","fs","hd","hm","ht","hw","ir","lb","lt","mb","md","mm","mn","mt","np","pg","pm","sk","tn","ts","tt","vd","vo","vr","vs","xw","Input","Keyboard","Text","brltty","update.d","ca-certificates","calendar","chatscripts","customizations","managed","recommended","policies","chromium-browser","compizconfig","console-setup","cracklib","cron.d","cron.daily","cron.hourly","cron.monthly","cron.weekly","interfaces","ppd","ssl","cups","cupshelpers","session.d","system.d","dbus-1","ibus.d","db","profile","dconf","default","depmod.d","dhclient-enter-hooks.d","dhclient-exit-hooks.d","dhcp","dictionaries-common","documents","doc-base","dpkg.cfg.d","origins","dpkg","site-start.d","emacs","pref","firefox","65-0-fonts-guru-extra.conf","conf.avail","2","gconf.xml.defaults","gconf.xml.mandatory","gconf","gdb","cidfmap.d","fontmap.d","ghostscript","gnome","gnome-app-install","groff","grub.d","mech.d","gss","gtk-2.0","gtk-3.0","guest-session","hp","action.d","ifplugd","init.d","hooks","init-bottom","init-premount","init-top","local-bottom","local-premount","local-top","nfs-bottom","nfs-premount","nfs-top","panic","scripts","initramfs-tools","overrides","insserv","insserv.conf.d","iproute2","security","java-8-oracle","kbd","postinst.d","postrm.d","kernel","ld.so.conf.d","ldap","libnl-3","libpaper.d","libreoffice","lightdm.conf.d","lightdm","ignore.d.paranoid","ignore.d.server","ignore.d.workstation","logcheck","logrotate.d","archive","backup","lvm","modprobe.d","modules-load.d","mysql.conf.d","mysql","if-down.d","if-post-down.d","if-pre-up.d","if-up.d","interfaces.d","network","newt","sites-available","sites-enabled","snippets","nginx","openal","openvpn","opt","pam.d","pcmcia","CPAN","Net","perl","mods-available","5.6","7.0","cli","pool.d","fpm","7.1","7.2","php","fwupd","fwupd-metadata","pki","config.d","power.d","sleep.d","localauthority","localauthority.conf.d","nullbackend.conf.d","polkit-1","ip-down.d","ip-up.d","ipv6-down.d","ipv6-up.d","peers","resolv","ppp","profile.d","pulse","python","python2.7","python3","python3.5","rc0.d","rc1.d","rc2.d","rc3.d","rc4.d","rc5.d","rc6.d","rcS.d","resolv.conf.d","update-libc.d","resolvconf","rsyslog.d","dll.d","sane.d","limits.d","namespace.d","selinux","sensors.d","sgml","webkit-options.d","signon-ui","skel","clients","modules","speech-dispatcher","ssh","certs","private","sudoers.d","sysctl.d","bluetooth.target.wants","default.target.wants","display-manager.service.wants","final.target.wants","getty.target.wants","graphical.target.wants","hibernate.target.wants","hybrid-sleep.target.wants","multi-user.target.wants","network-online.target.wants","paths.target.wants","printer.target.wants","sockets.target.wants","suspend.target.wants","sysinit.target.wants","timers.target.wants","system","user","systemd","terminfo","thermald","thunderbird","timidity","tmpfiles.d","hwdb.d","rules.d","udev","udisks2","applications.d","ufw","release-upgrades.d","update-manager","update-motd.d","update-notifier","usb_modeswitch.d","vim","wildmidi","wpa_supplicant","autostart","menus","xdg","xml","etc","codestyles","jdbc-drivers","options","plugins","tasks","config","LocalHistory","caches","conversion","extResources","detection","frameworks","fus-sessions","httpFileSystem",".persistent","angularjs.app.index","angularjs.template.cache","angularjs.ui.router.views.index","compassfunctionsindex","css.template.selectors","cssindex","domfileindex","drupal.hook.name","duplicatesindex","fileincludes","filenameindex","filetypes","frameworkdetectionindex","html5.custom.attributes.index","http.request.execution.environment","idindex","imagefileinfoindex","js.custom.single.entry.index","js.implicit.elements.index","js.package.index","js.test.names","php.class.alias.name","php.class.alias.to.class","php.class.name","php.class.to.class.alias","php.constant.name","php.function.name","php.method.name","php.namespace.inheritance","php.trait.usage","php.unit.covers","php.variable.name","relaxsymbolindex","schematypeinheritance","sql.routine.index","sql.types.count.index","stubs","todoindex","trigram.index","wordpress.hook.invocations","xmlnamespaces","xmltagnames","xsltsymbolindex","index","log","restart","stat","tmp","svn_branches","vcs","hashes","refs","vcs-log","vcs-users",".PhpStorm2018.1","Cache","Default","chromium","compizconfig-1","anahkiasen","aws","behat","cocur","doctrine","elao","firebase","friendsofsymfony","gedmo","google","guzzlehttp","incenteev","jdorn","jms","knplabs","kriswallsmith","league","mmoreram","monolog","mtdowling","ocramius","oneup","pagerfanta","paquettg","paragonie","patchwork","phpseclib","psr","sensio","sensiolabs","sonata-project","stof","swiftmailer","symfony","twig","vich","wa72","white-october","willdurand","zendframework","files","https---packagist.org","repo","composer"];
    const files =  ["bash","bunzip2","busybox","bzcat","bzdiff","bzexe","bzgrep","bzip2","bzip2recover","bzmore","cat","chacl","chgrp","chmod","chown","chvt","cp","cpio","dash","date","dd","df","dir","dmesg","dumpkeys","echo","ed","efibootmgr","egrep","false","fgconsole","fgrep","findmnt","fuser","fusermount","getfacl","grep","gunzip","gzexe","gzip","hciconfig","hostname","ip","journalctl","kbd_mode","kill","kmod","less","lessecho","lesskey","lesspipe","ln","loadkeys","login","loginctl","lowntfs-3g","ls","lsblk","mkdir","mknod","mktemp","more","mount","mountpoint","mt-gnu","mv","nano","nc.openbsd","netstat","networkctl","ntfs-3g","ntfs-3g.probe","ntfs-3g.secaudit","ntfs-3g.usermap","ntfscat","ntfscluster","ntfscmp","ntfsfallocate","ntfsfix","ntfsinfo","ntfsls","ntfsmove","ntfstruncate","ntfswipe","openvt","ping","ping6","plymouth","ps","pwd","readlink","red","rm","rmdir","run-parts","sed","setfacl","setfont","setupcon","sleep","ss","stty","su","sync","systemctl","systemd-ask-password","systemd-escape","systemd-hwdb","systemd-inhibit","systemd-machine-id-setup","systemd-notify","systemd-tmpfiles","systemd-tty-ask-password-agent","tailf","tar","tempfile","touch","true","udevadm","ulockmgr_server","umount","uname","uncompress","unicode_start","vdir","wdctl","which","whiptail","zcat","zcmp","zdiff","zegrep","zfgrep","zforce","zgrep","zless","zmore","znew","System.map-4.13.0-36-generic","System.map-4.13.0-38-generic","System.map-4.13.0-39-generic","abi-4.13.0-36-generic","abi-4.13.0-38-generic","abi-4.13.0-39-generic","config-4.13.0-36-generic","config-4.13.0-38-generic","config-4.13.0-39-generic","unicode.pf2","grub.cfg","grubenv","en@quot.mo","en_AU.mo","en_CA.mo","en_GB.mo","acpi.mod","adler32.mod","affs.mod","afs.mod","ahci.mod","all_video.mod","aout.mod","appleldr.mod","archelp.mod","at_keyboard.mod","ata.mod","backtrace.mod","bfs.mod","bitmap.mod","bitmap_scale.mod","blocklist.mod","boot.mod","bsd.mod","btrfs.mod","bufio.mod","cat.mod","cbfs.mod","cbls.mod","cbmemc.mod","cbtable.mod","cbtime.mod","chain.mod","cmdline_cat_test.mod","cmp.mod","command.lst","configfile.mod","core.efi","cpio.mod","cpio_be.mod","cpuid.mod","crc64.mod","crypto.lst","crypto.mod","cryptodisk.mod","cs5536.mod","date.mod","datehook.mod","datetime.mod","disk.mod","diskfilter.mod","div_test.mod","dm_nv.mod","echo.mod","efi_gop.mod","efi_uga.mod","efifwsetup.mod","efinet.mod","ehci.mod","elf.mod","eval.mod","exfat.mod","exfctest.mod","ext2.mod","extcmd.mod","fat.mod","file.mod","fixvideo.mod","font.mod","fs.lst","fshelp.mod","functional_test.mod","gcry_arcfour.mod","gcry_blowfish.mod","gcry_camellia.mod","gcry_cast5.mod","gcry_crc.mod","gcry_des.mod","gcry_dsa.mod","gcry_idea.mod","gcry_md4.mod","gcry_md5.mod","gcry_rfc2268.mod","gcry_rijndael.mod","gcry_rmd160.mod","gcry_rsa.mod","gcry_seed.mod","gcry_serpent.mod","gcry_sha1.mod","gcry_sha256.mod","gcry_sha512.mod","gcry_tiger.mod","gcry_twofish.mod","gcry_whirlpool.mod","geli.mod","gettext.mod","gfxmenu.mod","gfxterm.mod","gfxterm_background.mod","gfxterm_menu.mod","gptsync.mod","grub.efi","gzio.mod","halt.mod","hashsum.mod","hdparm.mod","hello.mod","help.mod","hexdump.mod","hfs.mod","hfsplus.mod","hfspluscomp.mod","http.mod","iorw.mod","iso9660.mod","jfs.mod","jpeg.mod","keylayouts.mod","keystatus.mod","ldm.mod","legacy_password_test.mod","legacycfg.mod","linux.mod","linux16.mod","linuxefi.mod","load.cfg","loadbios.mod","loadenv.mod","loopback.mod","ls.mod","lsacpi.mod","lsefi.mod","lsefimmap.mod","lsefisystab.mod","lsmmap.mod","lspci.mod","lssal.mod","luks.mod","lvm.mod","lzopio.mod","macbless.mod","macho.mod","mdraid09.mod","mdraid09_be.mod","mdraid1x.mod","memdisk.mod","memrw.mod","minicmd.mod","minix.mod","minix2.mod","minix2_be.mod","minix3.mod","minix3_be.mod","minix_be.mod","mmap.mod","moddep.lst","modinfo.sh","morse.mod","mpi.mod","msdospart.mod","multiboot.mod","multiboot2.mod","nativedisk.mod","net.mod","newc.mod","nilfs2.mod","normal.mod","ntfs.mod","ntfscomp.mod","odc.mod","offsetio.mod","ohci.mod","part_acorn.mod","part_amiga.mod","part_apple.mod","part_bsd.mod","part_dfly.mod","part_dvh.mod","part_gpt.mod","part_msdos.mod","part_plan.mod","part_sun.mod","part_sunpc.mod","partmap.lst","parttool.lst","parttool.mod","password.mod","password_pbkdf2.mod","pata.mod","pbkdf2.mod","pbkdf2_test.mod","pcidump.mod","play.mod","png.mod","priority_queue.mod","probe.mod","procfs.mod","progress.mod","raid5rec.mod","raid6rec.mod","read.mod","reboot.mod","regexp.mod","reiserfs.mod","relocator.mod","romfs.mod","scsi.mod","search.mod","search_fs_file.mod","search_fs_uuid.mod","search_label.mod","serial.mod","setjmp.mod","setjmp_test.mod","setpci.mod","sfs.mod","signature_test.mod","sleep.mod","sleep_test.mod","spkmodem.mod","squash4.mod","syslinuxcfg.mod","tar.mod","terminal.lst","terminal.mod","terminfo.mod","test.mod","test_blockarg.mod","testload.mod","testspeed.mod","tftp.mod","tga.mod","time.mod","tr.mod","trig.mod","true.mod","udf.mod","ufs1.mod","ufs1_be.mod","ufs2.mod","uhci.mod","usb.mod","usb_keyboard.mod","usbms.mod","usbserial_common.mod","usbserial_ftdi.mod","usbserial_pl2303.mod","usbserial_usbdebug.mod","usbtest.mod","verify.mod","video.lst","video.mod","video_bochs.mod","video_cirrus.mod","video_colors.mod","video_fb.mod","videoinfo.mod","videotest.mod","videotest_checksum.mod","xfs.mod","xnu.mod","xnu_uuid.mod","xnu_uuid_test.mod","xzio.mod","zfs.mod","zfscrypt.mod","zfsinfo.mod","initrd.img-4.13.0-36-generic","initrd.img-4.13.0-38-generic","initrd.img-4.13.0-39-generic","memtest86+.bin","memtest86+.elf","memtest86+_multiboot.bin","retpoline-4.13.0-36-generic","retpoline-4.13.0-38-generic","retpoline-4.13.0-39-generic","vmlinuz-4.13.0-36-generic","vmlinuz-4.13.0-38-generic","vmlinuz-4.13.0-38-generic.efi.signed","vmlinuz-4.13.0-39-generic","vmlinuz-4.13.0-39-generic.efi.signed","pulse-shm-1114093800","pulse-shm-1425451383","pulse-shm-1676850608","pulse-shm-184609885","pulse-shm-1850989400","pulse-shm-2209434930","pulse-shm-260099057","pulse-shm-2800386122","pulse-shm-297132575","pulse-shm-314097902","pulse-shm-3546419391","pulse-shm-3556293330","pulse-shm-4199999754","pulse-shm-478836863","pulse-shm-544971981","pulse-shm-589994206","pulse-shm-695062481","pulse-shm-933452681","pulse-shm-99497217",".system.lock",".systemRootModFile",".pwd.lock","coder.xml","colors.xml","delegates.xml","log.xml","magic.xml","mime.xml","policy.xml","quantization-table.xml","thresholds.xml","type-dejavu.xml","type-ghostscript.xml","type-windows.xml","type.xml","NetworkManager.conf","nm-openvpn-service.name","nm-pptp-service.name","default-wifi-powersave-on.conf","01ifupdown","setfive-5gz","setfive2g","setfive5g","whatif-openvpn-production","UPower.conf","Xreset","README","x11-common","Xsession","00upstart","20x11-common_process-args","30x11-common_xresources","35x11-common_xhost-local","40x11-common_xsessionrc","50_check_unity_support","50x11-common_determine-startup","55gnome-session_gnomerc","60x11-common_localhost","60x11-common_xdg_path","60xbrlapi","60xdg-user-dirs-update","65compiz_profile-on-session","70gconfd_path-on-session","70im-config_launch","75dbus_dbus-launch","81overlay-scrollbar","90atk-adaptor","90gpg-agent","90qt-a11y","90x11-common_ssh-agent"]

    const result = [];
    for(let i = 0; i < 25; i++){
        if(depth < 5 && randInt(0, 4) == 0){
            let newPath = prefix + dirs[randInt(0, dirs.length - 1)];
            if( newPath[newPath.length - 1] != "/" ){
                newPath += "/";
            }
            result.push( generateDirTree(newPath, depth + 1) );
        }else{
            result.push( prefix + files[randInt(0, files.length - 1)] );
        }
    }

    return result;
}

function getTargetFile(fileTree){
    const flatFiles = [];
    function getFiles(files){
        files.forEach(f => {
            if(Array.isArray(f)){
                getFiles(f);
            }else{
                flatFiles.push(f);
            }
        });
    }

    getFiles(fileTree);

    return flatFiles[ randInt(0, flatFiles.length - 1) ];
}

const dirsFiles = generateDirTree("/", 0);
const fileToFind = getTargetFile(dirsFiles);
const foundInList = searchForFile(dirsFiles, fileToFind);
if(foundInList === true){
    console.log("searchForFile: Might be working!");
}else{
    console.log("searchForFile: Probably not working...");
}

/**
 * Searches files and returns if filename is contained within the list of lists.
 * @param files array
 * @param filename string
 */
function searchForFile(files, filename){

}
