Vagrant.configure(2) do |config|
    config.vm.hostname = "metalsmith-html-minifier"
    config.vm.box = "ubuntu/vivid64"

    config.vm.synced_folder ".", "/vagrant", disabled: true
    config.vm.synced_folder ".", "/home/vagrant/workspace"

    config.vm.provision "shell", privileged: false, inline: %(
        curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
        echo 'deb https://deb.nodesource.com/node_5.x vivid main' | sudo tee /etc/apt/sources.list.d/nodesource.list
        sudo apt-get update && sudo apt-get -y dist-upgrade
        if [[ ! -d .files ]]
        then
            git clone git://github.com/whymarrh/dotfiles .files
            VAGRANT=true .files/install 2>&1
        fi
    )

    config.vm.provider "virtualbox" do |virtualbox|
        virtualbox.linked_clone = true
    end
end
