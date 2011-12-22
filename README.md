This is a simple test checking dnode compatiblity using a browser based client as shown here:

https://github.com/substack/dnode/blob/master/README.markdown

I am doing each example independently so I can just pull it down and run it seperately.

git clone https://github.com/rockhowse/dnode-test-browser.git

Then run the following commands to install the proper node.js dependencies (dnode and friends) for this project:

C:\Users\Sexbox\Desktop\nodejs>cd dnode-test-browser

C:\Users\Sexbox\Desktop\nodejs\dnode-test-browser>npm i

...
'''text
dnode@0.9.3 ./node_modules/dnode
+-- jsonify@0.0.0
+-- lazy@1.0.7
+-- traverse@0.4.6
+-- dnode-protocol@0.1.1 (traverse@0.5.2)
+-- socket.io@0.8.6 (policyfile@0.0.4 redis@0.6.7)
+-- socket.io-client@0.8.6
'''

At this point, you can start up the server:

C:\Users\Sexbox\Desktop\nodejs\dnode-test-browser>node server.js

Open up the browser of choice (Chrome! and navigate to the url:



tada! simple remote method run on the server using dnode =)

-rOcK



