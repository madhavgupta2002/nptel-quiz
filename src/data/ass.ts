import { Assignment } from "../types";

export const assignment: Assignment = {
    "Ethical Hacking": {
        // PROMPT IS COPY EXACTLY FROM PROMPT Q, OPTION , DETAIL
        "Assignment 0": [
            {
                "q": "What is ethical hacking?",
                "options": {
                    "a": "Unauthorized intrusion in a system or a network. And commit malicious activities such as privacy invasion, stealing personal/corporate data, and more.",
                    "b": "Systematically attempts to penetrate/intrude into a computer system/network on behalf of its owner and finds out threats and vulnerabilities."
                },
                "answer": "b",
                "explanation": "Ethical hacking is also known as penetration testing or intrusion testing where the person systematically attempts to penetrate/intrude into a computer system, application, network, or some other computing resources on behalf of its owner and finds out threats and vulnerabilities that a malicious hacker could potentially exploit. The main objective of ethical hacking is to improve the security of the system or network and fix the vulnerabilities found during the testing."
            },
            {
                "q": "Which of the following application(s) is/are used to secure personal laptop/desktop?\n\n1. Antivirus\n2. Virus\n3. Malware\n4. Firewall",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "2 and 4",
                    "d": "1 and 4"
                },
                "answer": "d",
                "explanation": "Antivirus applications are used to secure personal laptops/desktops. You can also secure your system by installing a firewall software."
            },
            {
                "q": "Which of the following is/are example of social engineering attacks?",
                "options": {
                    "a": "Phishing",
                    "b": "Baiting",
                    "c": "Vishing"
                },
                "answer": "a, b, c",
                "explanation": "(a) Phishing is a cyber-attack that uses disguised email/sms as a weapon. The goal is to trick the email recipient into believing that the message is something they want or need (b) Baiting involves luring an unsuspecting victim with a highly attractive offer playing on fear, greed and temptation to make them part with their personal sensitive data like log-in details. (c) Voice phishing, or vishing, is the use of telephony to conduct phishing attacks."
            },
            {
                "q": "How you can secure your website?",
                "options": {
                    "a": "Using firewall",
                    "b": "Encrypting the Cookies",
                    "c": "Validating and Verifying user input",
                    "d": "Validating users parameters"
                },
                "answer": "a, b, c, d",
                "explanation": "All of the listed approach can be used to secure website. (a) Firewall can be used to drop traffic from suspicious IP (b) Encrypted cookies can eliminate cookies based attack. (c) By validating user input we can prevent access of the website by unwanted user. (d) by validating user parameters we can eliminate injection of malicious query on our website database."
            },
            {
                "q": "Which of the following statement(s) is/are true for firewall?\n\n1. A firewall is a network security system\n2. Firewall can allows or blocks network traffic as per predetermined security rules\n3. Firewall are placed on the boundary of trusted and untrusted networks\n4. None of these",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "1, 2 and 3",
                    "d": "4"
                },
                "answer": "c",
                "explanation": "All of the statements are true for firewall."
            },
            {
                "q": "Which of the following Linux command can be used to view network configuration?",
                "options": {
                    "a": "ipconfig",
                    "b": "ifconfig",
                    "c": "ls",
                    "d": "cd",
                    "e": "None of these"
                },
                "answer": "b",
                "explanation": "In Linux based system ifconfig command is used to check network configuration."
            },
            {
                "q": "How many layers are there in OSI model?",
                "options": {
                    "a": "5",
                    "b": "6",
                    "c": "7",
                    "d": "8"
                },
                "answer": "c",
                "explanation": "OSI consist of 7 layers."
            },
            {
                "q": "Which of the following is/are transport layer protocol(s)?",
                "options": {
                    "a": "UDP",
                    "b": "TCP",
                    "c": "IP",
                    "d": "Ethernet"
                },
                "answer": "a, b",
                "explanation": "Ethernet is data link layer protocol, IP is network layer protocol, UDP and TCP are transport layer protocols."
            },
            {
                "q": "In IPv6, the number of bits used in IP address is?",
                "options": {
                    "a": "32",
                    "b": "64",
                    "c": "128",
                    "d": "256"
                },
                "answer": "c",
                "explanation": "IPv6 uses 128 bits for the IP address."
            },
            {
                "q": "Which of the following command(s) can be used to check the reachability of one system from another?",
                "options": {
                    "a": "ifconfig",
                    "b": "ls",
                    "c": "mkdir",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "None of the above command can check the reachability of one system from another. We can use ping command to check if any system is reachable or not."
            },
            {
                "q": "Which of the following are networking devices?\n\n1. Hub\n2. Switch\n3. Router\n4. None of these",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "1, 2 and 3",
                    "d": "4 only"
                },
                "answer": "c",
                "explanation": "Hub, Switch and router all are networking devices used to connect multiple devices/subnetwork in a network."
            },
            {
                "q": "Which of the following is used to host a website?",
                "options": {
                    "a": "Mail Server",
                    "b": "Webserver",
                    "c": "Database",
                    "d": "None of these"
                },
                "answer": "b",
                "explanation": "Webserver is mainly used to host websites."
            },
            {
                "q": "Which of the following network is used to cover small area like a room/building?",
                "options": {
                    "a": "LAN",
                    "b": "WAN",
                    "c": "MAN",
                    "d": "None of these"
                },
                "answer": "a",
                "explanation": "LAN is used to provide networking facility in small area like a room/building. WAN is used to cover larger area such as city. MAN is used to cover large geographical area like countries."
            }
        ],
        "Assignment 1": [
            {
                "q": "Which of the following point(s) is/are true for an ethical hacker?",
                "options": {
                    "a": "An ethical hacker intends to gain unauthorized access to a resource for financial gain or personal recognition.",
                    "b": "An ethical hacker defaces websites or crash backend servers for fun, reputation damage or to cause financial loss.",
                    "c": "An ethical hacker is not concerned with improving the organization's security posture.",
                    "d": "None of these."
                },
                "answer": "d",
                "explanation": "Ethical hackers use their knowledge to secure and improve the technology of organizations. An ethical hacker reports the identified vulnerabilities to the organization. Malicious hackers intend to gain unauthorized access to a resource for financial gain or personal recognition. Some malicious hackers deface websites or crash backend servers for fun, reputation damage, or to cause financial loss. The methods used and vulnerabilities found remain unreported. They are concerned with improving the organization's security posture. Thus all the points given are false for an ethical hacker."
            },
            {
                "q": "Which of the following statement(s) is/are true?",
                "options": {
                    "a": "In the black box model, the tester has complete information about the network.",
                    "b": "In the white box model, the tester does not have any information about the network.",
                    "c": "In the gray box model, the tester has partial information about the network.",
                    "d": "None of these."
                },
                "answer": "c",
                "explanation": "In the white box model, the tester has complete information about the network. In the black box model, the tester does not have any information about the network. Gray box model is somewhere in between, where the tester is only provided with partial information about the network."
            },
            {
                "q": "Which of the following statement(s) is/are false for a packet switched network?",
                "options": {
                    "a": "A communication link can be shared by more than one connection.",
                    "b": "A communication link is dedicated to a connection and cannot be shared with other connections.",
                    "c": "It is efficient for bursty traffic.",
                    "d": "The packet transfer delay between a pair of nodes may depend on the prevailing network traffic."
                },
                "answer": "b",
                "explanation": "In a packet switched network, communication links may be shared by more than one connection. Also, in a packet switched network, packets between the same source and destination may follow different paths, and hence the packet transfer delay can vary with time; this depends on the prevailing traffic situation in the network. It is efficient for high bandwidth traffic like data streaming."
            },
            {
                "q": "Which of the following statement(s) is/are true for datagram-based packet transfer approach?\n\n1. It is a connection-less packet switching approach, where no route is established priori to transfer of packets.\n2. In this approach, each packet is transmitted as an independent entity.\n3. In this approach each intermediate node can perform dynamic routing.\n4. In this approach all the packets reach in order to the destination.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "1, 2 and 3",
                    "d": "1, 2, 3 and 4"
                },
                "answer": "c",
                "explanation": "Datagram approach is a connection-less packet switching approach where no route is established before packet transmission starts. In this approach each packet is transmitted as an independent entity containing source and destination addresses. Thus it is not necessary to follow same path for all packets and thus the packets can be delivered out of order. For forwarding the packet to next node, every node maintains a routing table that is updated dynamically to take routing decision."
            },
            {
                "q": "What is the purpose of the port number in TCP/IP networks?",
                "options": {
                    "a": "It uniquely identifies a network interface of a computer system.",
                    "b": "It uniquely identifies a host in the network.",
                    "c": "It uniquely identifies a running application on a specific host in the network.",
                    "d": "It indicates how many hardware ports are there in the computer system.",
                    "e": "None of these."
                },
                "answer": "c",
                "explanation": "Port number uniquely identifies a running application on a specified host in the network."
            },
            {
                "q": "Which of the following is not a valid port numbers in TCP/IP?",
                "options": {
                    "a": "21",
                    "b": "80",
                    "c": "443",
                    "d": "8080",
                    "e": "80800"
                },
                "answer": "e",
                "explanation": "In TCP/IP, port numbers are 16-bit quantities, with values in the range of 0 to 2^16-1 = 65535."
            },
            {
                "q": "Which of the following functionality does Address Resolution Protocol (ARP) perform?",
                "options": {
                    "a": "Map IP addresses to hardware (MAC) addresses.",
                    "b": "Map hardware addresses (MAC) to IP addresses.",
                    "c": "Performs error control and correction.",
                    "d": "Breaks the packet into smaller packets, if required."
                },
                "answer": "a",
                "explanation": "ARP is responsible for mapping IP addresses to MAC addresses."
            },
            {
                "q": "Which of the following statement(s) is/are false?",
                "options": {
                    "a": "IP provides connectionless, unreliable delivery systems for packets.",
                    "b": "UDP provides connectionless, unreliable delivery systems for packets",
                    "c": "TCP provides connectionless, unreliable delivery systems for packets.",
                    "d": "None of these."
                },
                "answer": "c",
                "explanation": "IP and UDP provide connectionless, unreliable delivery systems for packets. However TCP provides a connection-oriented reliable service."
            },
            {
                "q": "If the IP header is 96 bits long, what will be the value (in decimal) of the \"HLEN\" field?",
                "options": {
                    "a": "2",
                    "b": "3",
                    "c": "4",
                    "d": "6"
                },
                "answer": "b",
                "explanation": "The HLEN field contains the size of the IP header in multiples of 32 bits or 4 bytes. Here, size of the IP header = 96 bits = 3 x 32 bits. Hence, HLEN will contain 0011, which is the binary equivalent of the number 3."
            },
            {
                "q": "The maximum size of data that can be accommodated in an IP datagram is ________ bytes.",
                "options": {
                    "a": "65500",
                    "b": "65515",
                    "c": "65535",
                    "d": "65550"
                },
                "answer": "b",
                "explanation": "The TOTAL-LENGTH field in the IP header is 16 bits, which can contain values from 0 to 2^16 – 1 = 65535, the total size of an IP packet can be 65535 bytes. Also, the minimum size of the IP header is 20 bytes, which makes the maximum size of data as 65535 – 20 = 65515 bytes."
            }
        ],
        "Assignment 2": [
            {
                "q": "Why there is a need for fragmentation of IP packets?",
                "options": {
                    "a": "Fragmentation is necessary because every network has a unique limit for the maximum size of datagrams that it can process.",
                    "b": "Fragmentation is necessary for faster data transfer.",
                    "c": "Fragmentation is necessary for error-recovery and flow control.",
                    "d": "All of these."
                },
                "answer": "a",
                "explanation": "IP fragmentation is necessary for data transmission, as every network has a unique limit for the size of datagrams that it can process, which is known as maximum transmission unit (MTU). In fragmentation, the packets are divided into smaller pieces and each piece is considered as separate IP packet. This is typically done by the routers in the network layer (or layer-3 switches)."
            },
            {
                "q": "Which of the following statement(s) is/are true?",
                "options": {
                    "a": "In transparent fragmentation the subsequent networks are aware that the fragmentation had occurred.",
                    "b": "In transparent fragmentation, it is required to route all packet to the same exit router in a network.",
                    "c": "In non-transparent fragmentation, each fragment is treated as an independent packet.",
                    "d": "In non-transparent fragmentation, an exit router reassembles all fragmented packets."
                },
                "answer": "b, c",
                "explanation": "In transparent fragmentation, all packets are routed through an exit router that assembles the fragmented packets. In this approach the subsequent network(s) have no information about fragmentation. Whereas in non-transparent fragmentation the packets can be transmitted through multiple routers as each packet is treated as independent packet and the reassembly is done by the destination host system."
            },
            {
                "q": "An IP packet arrives at the final destination with the M flag set as 1. Which of the following statement is true about the packet?",
                "options": {
                    "a": "Prevents the fragmentation from taking place.",
                    "b": "The packet will be fragmented by the next router.",
                    "c": "The packet represents a fragment of a larger packet.",
                    "d": "None of these."
                },
                "answer": "c",
                "explanation": "When the More (M) flag in a packet is 1, this indicates that the original packet has definitely been fragmented and there are more fragments following."
            },
            {
                "q": "Which of the following statement(s) is/are false for IP address?",
                "options": {
                    "a": "IP address is 32-bit quantity.",
                    "b": "IP address is typically expressed as dotted decimal notation where dots are used to separate each of the four octets of the address.",
                    "c": "IP address consists of three logical parts: network number, host number and port number.",
                    "d": "None of these."
                },
                "answer": "c",
                "explanation": "IP address is 32-bit quantity, it is expressed as dotted decimal notation where dots are used to separate each of the four octets of the address. IP address consist of two logical parts: network number and host number, while routing a packet to the destination network, only the network number is looked at whereas for uniquely identification of the system inside a network host number is used which is managed by local network administrator."
            },
            {
                "q": "Which address classes do the IP addresses 144.16.75.12 and 10.10.85.120 belong to?",
                "options": {
                    "a": "Class C and Class A",
                    "b": "Class B and Class C",
                    "c": "Class B and Class A",
                    "d": "Class B and Class D"
                },
                "answer": "c",
                "explanation": "Class A addresses start with \"0\", class B addresses start with \"10\", class C addresses start with \"110\", and class D addresses start with \"1110\". For the IP address 144.16.75.12, the first byte 144 = 10010000 in binary; for the IP address 10.10.85.120, the first byte 10 = 0000 1010 in binary. Clearly, the first one is Class B, and the second one is Class A address."
            },
            {
                "q": "Which of the following IP addresses represent broadcast address?",
                "options": {
                    "a": "144.15.255.255",
                    "b": "144.16.0.255",
                    "c": "202.0.255.250",
                    "d": "202.0.255.255"
                },
                "answer": "a, d",
                "explanation": "In a broadcast address, all the bits in the \"host\" part of the IP address will be 1. (a) and (b) are class B addresses, where the last 16 bits indicate the host. (c) and (d) are class C addresses, where the last 8 bits indicate the host."
            },
            {
                "q": "The maximum number of hosts that are possible in a class C network is?",
                "options": {
                    "a": "252",
                    "b": "253",
                    "c": "254",
                    "d": "255"
                },
                "answer": "c",
                "explanation": "For a class C network, 8 bits are provided to specify the host. The all-0 and all-1 combinations cannot be used as host addresses. Therefore, the maximum number of hosts possible is 2^8 – 2 = 254."
            },
            {
                "q": "What is a TCP half-open connection in the context of connection establishment using 3-way handshake?",
                "options": {
                    "a": "The first transaction does not complete.",
                    "b": "The second transaction does not complete.",
                    "c": "The first transaction does not complete but the second transaction completes.",
                    "d": "The last transaction does not complete.",
                    "e": "None of these."
                },
                "answer": "d",
                "explanation": "In the TCP protocol, connection establishment is carried out using a 3-way handshake protocol. When the third transaction in the 3-way handshake does not complete, it is referred to as a half-open connection."
            },
            {
                "q": "In the TCP header field, what do SYN=1 and ACK=0 represent?",
                "options": {
                    "a": "Connection request message.",
                    "b": "Connection confirmation message.",
                    "c": "Reject connection request.",
                    "d": "Reset connection request."
                },
                "answer": "a",
                "explanation": "In the TCP header, SYN=1 and ACK=0 represents connection request, whereas SYN=1 and ACK=1 represents connection confirmation. RST is used to reset/reject connection."
            },
            {
                "q": "What is the subnet address if the destination IP address is 144.16.75.105 and the subnet mask is 255.255.240.0?",
                "options": {
                    "a": "144.16.32.0",
                    "b": "144.16.75.0",
                    "c": "144.16.16.0",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "Let us express the two numbers in binary: 144.16.75.105 = 10010000 00010000 01001011 01101001 255.255.240.0 = 11111111 11111111 11110000 00000000 If we take bit-by-bit AND, we shall get the subnet address as 10010000 00010000 01000000 00000000 = 144.16.64.0"
            }
        ],
        "Assignment 3": [
            {
                "q": "Consider the following statements:\n(i) In connection-oriented approach, network layer first makes a connection.\n(ii) IP protocol uses connection-oriented routing.",
                "options": {
                    "a": "Only (i) is true",
                    "b": "Only (ii) is true",
                    "c": "Both (i) and (ii) are true.",
                    "d": "Both (i) and (ii) are false."
                },
                "answer": "a",
                "explanation": "In connection-oriented approach, network layer first makes a connection and then all packets are delivered as per the connection. In connection-less protocol, network layer treats each packets independently. IP protocol uses connection-less approach for packet delivery."
            },
            {
                "q": "Which of the following statements are true for default route?\n\n1. Default route is used when no specific address for next hop is available.\n2. In routing table default route is specified by an address 0.0.0.0.\n3. In routing table default route is specified by an address 255.255.255.255.\n4. In routing table default route is specified by an address 127.0.0.1.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "a",
                "explanation": "Default route, also known as the gateway of last resort, is used in forwarding packets whose destination address does not match any route in the routing table. In IPv4 the CIDR notation for a default route is 0.0.0.0/0."
            },
            {
                "q": "Which of the following is/are true for static routing?",
                "options": {
                    "a": "In static routing routes are user defined.",
                    "b": "In static routing, routing table updates periodically depending on the network condition.",
                    "c": "Static routing is easy to configure.",
                    "d": "None of these."
                },
                "answer": "a",
                "explanation": "In static routing routes are defined manually and the routing table does not change until the network administrator changes manually or modify them manually. Also if any network change occurs, then the complete table needs to be modified."
            },
            {
                "q": "Which of the following routing flags indicates that the router is up and running?",
                "options": {
                    "a": "U",
                    "b": "G",
                    "c": "H",
                    "d": "D",
                    "e": "M"
                },
                "answer": "a",
                "explanation": "U flag indicates if the router is up and running."
            },
            {
                "q": "Which of the following statement(s) is/are true for interior routing protocol?\n\n1. All the participating routers are present in the same autonomous system.\n2. The participating routers are present in different autonomous systems.\n3. Routers in different autonomous systems exchange messages to update their routing tables.\n4. Routers in the same autonomous system exchange messages to update their routing tables.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "d",
                "explanation": "The interior routing protocols applies to a single autonomous system. All the routers inside the AS exchange messages using some standard protocol (e.g. RIP or OSPF) and update their routing tables."
            },
            {
                "q": "Which of the following statement(s) is/are false for Routing Information Protocol (RIP)?",
                "options": {
                    "a": "RIP is an example of interior routing protocol.",
                    "b": "RIP maintains timers to detect failed links.",
                    "c": "RIP converges faster for large networks.",
                    "d": "RIP consumes high bandwidth to update routes.",
                    "e": "None of these."
                },
                "answer": "c",
                "explanation": "RIP shows slow convergence for larger network, because to confirm or detect any failed link it requires to send larger number of packets as compare to other routing protocols."
            },
            {
                "q": "Which of the following is/are false for Border Gateway Protocol (BGP)?",
                "options": {
                    "a": "BGP allows routers belonging to different autonomous systems to exchange routing information.",
                    "b": "BGP uses TCP connection to send routing messages.",
                    "c": "BGP can also be used by routers within the same autonomous systems.",
                    "d": "BGP sends keepalive messages periodically to ensure that the connection between the BGP peers is alive.",
                    "e": "None of these."
                },
                "answer": "e",
                "explanation": "BGP is used for exchanging routing information by the routers belongs to different autonomous systems. However it can also be used to exchange information by routers within same AS. BGP sends routing information through TCP connection. Two BGP routers exchange information on a connection are called peers, to know if the peer is alive or not. BGP sends keepalive message periodically to its peer."
            },
            {
                "q": "If a packet is to be delivered to a specific host in a network, what kind of address should be used to specify the destination?",
                "options": {
                    "a": "Unicast address.",
                    "b": "Broadcast address.",
                    "c": "Anycast address.",
                    "d": "None of these."
                },
                "answer": "a",
                "explanation": "Unicast address is used if a packet is to be delivered to a specific host. Broadcast address is used if a packet has to be delivered to all the hosts within a network or subnetwork. Anycast address is used if a packet has to be delivered to exactly one of the hosts in a network or subnetwork."
            },
            {
                "q": "Which of the following is not true for IPv6?",
                "options": {
                    "a": "It uses 32-bit IP addresses.",
                    "b": "IPv6 address does not have any defined classes.",
                    "c": "It uses 128-bit IP addresses.",
                    "d": "None of these."
                },
                "answer": "a",
                "explanation": "IPv6 uses 128-bit IP addresses, and provides a large address space. Unlike IPv4 it does not have any defined classes."
            },
            {
                "q": "Consider the following routing table in a router. On which interface will an IP packet with destination address 161.44.64.120 be forwarded?\nDestination Subnet Mask Interface\n161.44.0.0 255.255.0.0 a\n161.44.64.0 255.255.224.0 b\n161.44.68.0 255.255.255.0 c\n161.44.68.64 255.255.255.224 d\nDefault 0.0.0.0 e",
                "options": {
                    "a": "Interface a",
                    "b": "Interface b",
                    "c": "Interface c",
                    "d": "Interface d",
                    "e": "Interface e"
                },
                "answer": "b",
                "explanation": "Row 1: 161.44.64.120 AND 255.255.0.0 = 161.44.0.0  Matches with destination address\nRow 2: 161.44.64.120 AND 255.255.224.0 = 161.44.64.0  Matches with destination address\nRow 3: 161.44.64.120 AND 255.255.255.0 = 161.44.64.0  No match\nRow 4: 161.44.64.120 AND 255.255.255.224 = 161.44.64.112  No match\nRow 2 provides the longest prefix match; hence the packet will be forwarded to Interface b."
            }
        ],
        "Assignment 4": [
            {
                "q": "Which of the following statement(s) is/are true for NAT networking mode?\n\n1. In NAT mode, the virtual machines cannot access each other.\n2. NAT mode does not allow access of internet to the installed virtual machines.\n3. In NAT mode, the hypervisor allocate same IP address to all virtual machines.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "1 and 3",
                    "d": "All of these"
                },
                "answer": "c",
                "explanation": "By default, virtual box uses NAT mode. In this mode internet access is allowed; however, each system gets the same IP, and thus the virtual machines cannot access each other in this mode."
            },
            {
                "q": "Which of the following statement(s) is/are true about \"Passive Reconnaissance\"?\n\n1. Information about the target is collected indirectly.\n2. Information about the target is collected directly.\n3. There is a chance of detection.\n4. There is no chance of detection.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "d",
                "explanation": "Reconnaissance is the process of gathering information about a target network or system. In passive reconnaissance, we collect information about a target indirectly, e.g., web search. As the attacker and victim does not communicate directly, there is no a chance of detection."
            },
            {
                "q": "Which of the following can be used for active reconnaissance?\n\n1. Whois\n2. Archive.org\n3. NMAP\n4. Nessus\n5. Metasploit\n6. Hydra",
                "options": {
                    "a": "1, 2 and 3",
                    "b": "3, 4 and 5",
                    "c": "4, 5 and 6",
                    "d": "1, 2 and 6"
                },
                "answer": "b",
                "explanation": "Whois and archive are used for passive reconnaissance. NMAP, Nessus and Metasploit are used in active reconnaissance as they directly communicate with the target system. Hydra is a tool used for password cracking."
            },
            {
                "q": "Which of the following information cannot be retrieved using active reconnaissance?",
                "options": {
                    "a": "Live host in a network.",
                    "b": "Open ports.",
                    "c": "Services running in the systems.",
                    "d": "Operating system of the target system.",
                    "e": "Vulnerabilities of target machine/application.",
                    "f": "None of these."
                },
                "answer": "f",
                "explanation": "In active reconnaissance scanning tool performs major role, it can be used for identification of live host, active ports, services, operating system and vulnerabilities of the target system."
            },
            {
                "q": "Which of the following tools cannot be used for DNS enumeration?",
                "options": {
                    "a": "host",
                    "b": "dnsenum",
                    "c": "dig",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "For DNS enumeration various tools can be used such as host, dnsenum, dig, nslookup, nmap, dnsrecon, etc."
            },
            {
                "q": "What is the main objective of host discovery?",
                "options": {
                    "a": "Identification of live hosts.",
                    "b": "Identification of services running in the target system.",
                    "c": "Identification of version of the services running in the target system.",
                    "d": "Identification of the operating system of the target systems.",
                    "e": "Identification of open ports."
                },
                "answer": "a",
                "explanation": "The main objective of host discovery is to identify the live hosts in the network or network infrastructure."
            },
            {
                "q": "Which of the following options is used to trace the details of the sent/received packets?",
                "options": {
                    "a": "--packet-trace",
                    "b": "--reason",
                    "c": "--disable-arp-ping",
                    "d": "None of these"
                },
                "answer": "a",
                "explanation": "To get the details of the packets used for scanning, --packet-trace option can be used. – reason option is used to get the reason of the report (why the port/system is up/down). – disable-arp-ping is used to disable arp table check."
            },
            {
                "q": "Which of the following options can be used to perform ICMP ECHO sweep?",
                "options": {
                    "a": "–PE",
                    "b": "–PP",
                    "c": "–PM",
                    "d": "–PU"
                },
                "answer": "a",
                "explanation": "In ICMP ECHO sweep, the attacker sends out an ICMP ECHO request packet (ICMP type 8) to the target. If it receives an ICMP ECHO reply packet, it assumes that the target is alive. To perform ICMP ECHO sweep scan –PE option is used."
            },
            {
                "q": "The establishment of a TCP connection involves a negotiation called 3-way handshake. What type of message the client sends to the server in order to begin this negotiation?",
                "options": {
                    "a": "RST",
                    "b": "ACK",
                    "c": "SYN-ACK",
                    "d": "SYN"
                },
                "answer": "d",
                "explanation": "TCP connection establishment involves a 3-way handshake. Step 1 (SYN): In the first step, client wants to establish a connection with server, so it sends a segment with SYN that informs server that client is likely to start communication and with what sequence number it starts the segments. Step 2 (SYN + ACK): Server responds to the client request with SYN-ACK signal bits set. Step 3 (ACK): In the final part client acknowledges the response of server and they both establish a reliable connection with which they will start actual data transfer."
            },
            {
                "q": "How does port scanning using TCP Connect works?",
                "options": {
                    "a": "It creates a half-open connection during TCP connection establishment, and decides whether the port is open or not.",
                    "b": "It completes the 3-way handshake in TCP connection establishment, and decides whether the port is open.",
                    "c": "It does not use 3-way handshake.",
                    "d": "None of these."
                },
                "answer": "b",
                "explanation": "In TCP Connect, the attacker tries to complete a TCP connection with the target by using 3-way handshake. If successful, it concludes that the given port is open."
            },
            {
                "q": "Which of the following statements are true about TCP SYN scan port identification?\n\n1. An attacker sends a SYN packet to a port, if it receives an SYN-ACK (SA) then the port is reported as open.\n2. An attacker sends a SYN packet to a port, if it receives an RST (RA) then the port is reported as closed.\n3. An attacker sends an ACK packet to a port, if it receives an RST then the port is reported as open.\n4. An attacker sends an ACK packet to a port, if it receives an RST then the port is reported as closed.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "a",
                "explanation": "In TCP SYN scan open and closed ports are identified by sending SYN request to various ports of the target system. If a SYN-ACK packet is received for a port then the port is reported as open, whereas if it receives a RST (RA) packet then the port is reported as closed. ACK packets are not used in TCP SYN scan."
            },
            {
                "q": "Can the use of firewall prevent port/host scanning?",
                "options": {
                    "a": "True",
                    "b": "False"
                },
                "answer": "a",
                "explanation": "Use of firewalls (inbuilt as well as software firewall) can protect you to prevent port/host scanning. We have already done demonstration for this."
            },
            {
                "q": "By default how many ports are scanned in NMAP for a target system ________?",
                "options": {
                    "a": "1000",
                    "b": "2000",
                    "c": "3000",
                    "d": "4000"
                },
                "answer": "a",
                "explanation": "By default nmap scans for top 1000 ports."
            },
            {
                "q": "If we does not want to carry out port scanning then which of the following options can be used with NMAP?",
                "options": {
                    "a": "-F",
                    "b": "-p",
                    "c": "-Pn",
                    "d": "-sn",
                    "e": "We cannot disable port scanning."
                },
                "answer": "d",
                "explanation": "The –sn options tells nmap not to carry out a port scan after host discovery, and only provide a list of the available hosts that respond to the scan. Basically, only a ping scan is performed."
            },
            {
                "q": "Which of the following options can be used for OS and Version detection?",
                "options": {
                    "a": "–sn",
                    "b": "-Pn",
                    "c": "-A",
                    "d": "–sT",
                    "e": "None of these"
                },
                "answer": "c",
                "explanation": "For OS and version detection –O and –sV option is used. However scanning with option –A, which is known as aggressive scan, performs various type of scanning such as port scanning, host scanning, OS and version detection, vulnerabilities, etc."
            }
        ],
        "Assignment 5": [
            {
                "q": "Which of the following tools can be used for scanning vulnerabilities?\n\n1. Hypervisor\n2. Nessus\n3. Hydra\n4. Nmap\n5. Crunch",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 4",
                    "c": "3 and 4",
                    "d": "4 and 5"
                },
                "answer": "b",
                "explanation": "The typical tools that are used for scanning vulnerabilities in hosts and networks are NMAP, Nessus, Nexpose, MPSA, etc. Hypervisor is a software tool used for virtualization. Hydra and Crunch are used for performing password attack."
            },
            {
                "q": "Which of the following statements are true for NMAP scripts?\n\n1. Can be used for vulnerability scanning\n2. Can be used for backdoor detection\n3. Can be used for port detection\n4. Can be used for password attack",
                "options": {
                    "a": "1 and 2 only",
                    "b": "1, 2 and 3 only",
                    "c": "2, 3 and 4 only",
                    "d": "All of the above"
                },
                "answer": "d",
                "explanation": "The NMAP scripts can be useful for automated scanning. NMAP scripts can be used for vulnerability detection, backdoor detection, port detection, performing password attacks etc."
            },
            {
                "q": "Which of the following NMAP scripts is used to identify the OS of a target system?",
                "options": {
                    "a": "smb-os-brute",
                    "b": "smb-os-discovery",
                    "c": "http-os-check",
                    "d": "None of these."
                },
                "answer": "b",
                "explanation": "smb-os-discovery is used to identify the OS of the target system; there is no script such as smo-os-brute, http-os-check."
            },
            {
                "q": "Which of the following scripts can be used to detect if a target system is vulnerable to DoS attack?",
                "options": {
                    "a": "http-methos",
                    "b": "http-brute",
                    "c": "http-dos-ckeck",
                    "d": "http-slowloris-check",
                    "e": "ftp-anon"
                },
                "answer": "d",
                "explanation": "http-methos script is used to check if the host is running a web server on particular port. It can also identify the supported methods (i.e. POST, GET etc). http-brute script is used for a dictionary attack on web server to get some valid credentials. http-slowloris-check script is used to detect a web server vulnerability for DoS attack. ftp-anon script is used to identify if the host is running ftp server or not, it can also identify if it provides anonymous login on ftp or not. There is no script named as http-dos-check."
            },
            {
                "q": "Assume that we want to connect to a target system (10.0.0.1) through ssh service, the username and password are \"user\" and \"pwd\" respectively. Which of the following commands can be used to create a ssh connection?",
                "options": {
                    "a": "ssh 10.0.0.1 –p pwd",
                    "b": "ssh 10.0.0.1 -l pwd -p user",
                    "c": "ssh 10.0.0.1 user pwd",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "To create a ssh connection, the ssh command is used. With this command username is provided by using -l option or can be combined with target IP address using @ symbol. Password is asked by target after validating username. None of the commands are correct."
            },
            {
                "q": "The necessary parameters required to generate word list using crunch tool is:",
                "options": {
                    "a": "Minimum length of the word list.",
                    "b": "Maximum length of the word list.",
                    "c": "File name where the word list will be stored.",
                    "d": "No parameters are required to generate a word list."
                },
                "answer": "a, b",
                "explanation": "To generate a word list using crunch, the necessary parameters which needs to be provided are minimum and maximum length of the word list. All other parameters are optional."
            },
            {
                "q": "Which of the following tools can be used to perform password attack?",
                "options": {
                    "a": "Hydra",
                    "b": "Archive.org",
                    "c": "Netcraft",
                    "d": "Whois",
                    "e": "None of these."
                },
                "answer": "a",
                "explanation": "To perform password attack we can use Hydra tool."
            },
            {
                "q": "Which of the following can be used for gaining higher privileges than existing one?",
                "options": {
                    "a": "Vertical privilege escalation.",
                    "b": "Horizontal privilege escalation.",
                    "c": "Diagonal privilege escalation.",
                    "d": "Triangular privilege escalation.",
                    "e": "None of these."
                },
                "answer": "a",
                "explanation": "Vertical privilege escalation refers to gaining higher than existing privileges. Horizontal privilege escalation refers to acquiring the same level of privilege with the identity of some other user. There is nothing called diagonal/triangular privilege escalation."
            },
            {
                "q": "Which of the following approaches can be used to extract information about all users in a target system?",
                "options": {
                    "a": "Use of nmap script smb-enum-user",
                    "b": "Hydra tool",
                    "c": "Crunch tool",
                    "d": "Enum4linux"
                },
                "answer": "a, d",
                "explanation": "An nmap script smb-enum-user and enum4linux tools can be used to retrieve user information. Enum4linux tools can also enumerate password related information such as password policy. Hydra is used for password cracking, whereas crunch is used to create dictionary."
            },
            {
                "q": "In an attack using the remote administrative tool, which part of the tool needs to be placed in target system?",
                "options": {
                    "a": "Client",
                    "b": "Server"
                },
                "answer": "b",
                "explanation": "In remote administrative tool attack, server part of the tool needs to be placed on the target system."
            },
            {
                "q": "To upload any file in the target system which is connected through FTP connection which of the following command can be used?",
                "options": {
                    "a": "put",
                    "b": "get",
                    "c": "upload",
                    "d": "download"
                },
                "answer": "a",
                "explanation": "To upload any file we use the \"put\" command."
            },
            {
                "q": "Which of the following can self-replicate itself?",
                "options": {
                    "a": "Trojan",
                    "b": "Virus",
                    "c": "Ransomware",
                    "d": "All of these"
                },
                "answer": "b",
                "explanation": "Virus and worms typically replicate themselves and get attached to other files."
            },
            {
                "q": "How a malware can get inside into a system?",
                "options": {
                    "a": "Removable devices",
                    "b": "Attachments",
                    "c": "Fake Programs",
                    "d": "Untrusted sites and freeware software."
                },
                "answer": "a, b, c, d",
                "explanation": "Malware can get inside the system through all the given approaches."
            },
            {
                "q": "The major loophole of ARP is that \"a host can send unlimited number of ARP requests\", and this can be used for ARP spoofing / ARP poisoning.",
                "options": {
                    "a": "True",
                    "b": "False"
                },
                "answer": "a",
                "explanation": "In ARP protocol there is no limitations to send an ARP request, and this loophole is used to create ARP-based attack by sending multiple false ARP requests in network to flood ARP tables."
            },
            {
                "q": "Which of the following commands is used to see all arp entries in a system?",
                "options": {
                    "a": "arp -a",
                    "b": "arp -s",
                    "c": "arp -i",
                    "d": "arp -d"
                },
                "answer": "a",
                "explanation": "To access all information related to ARP, arp command is used, -a option is used to see all arp entries, -s option is used to create new arp entry, -i option is used to specify a particular network interface, -d option is used to delete an arp entry."
            }
        ],
        "Assignment 6": [
            {
                "q": "Which of the following is not an example of active security attack?",
                "options": {
                    "a": "Masquerade",
                    "b": "Replay",
                    "c": "Traffic analysis",
                    "d": "Modification",
                    "e": "Denial of Service."
                },
                "answer": "c",
                "explanation": "Analyzing the network traffic refers to passive attack. Masquerade, replay, modification, denial of service are active attacks."
            },
            {
                "q": "Consider the following statements:\n(i) In symmetric key cryptography, single shared key is used by sender and receiver.\n(ii) In Asymmetric key cryptography, separate keys are used by sender and receiver.",
                "options": {
                    "a": "Only (i) is true",
                    "b": "Only (ii) is true",
                    "c": "Both (i) and (ii) are true.",
                    "d": "Both (i) and (ii) are false."
                },
                "answer": "c",
                "explanation": "In symmetric key (private key) cryptography, a single key is shared and used by sender and receiver, whereas in public key cryptography separate keys are used by sender and receiver."
            },
            {
                "q": "15 parties want to exchange messages securely using a symmetric key encryption algorithm. The number of distinct key values required will be _________.",
                "options": {
                    "a": "105",
                    "b": "110",
                    "c": "115",
                    "d": "120"
                },
                "answer": "a",
                "explanation": "In symmetric encryption, every pair of communicating parties must have a separate key. For N parties, the number of keys will be NC2. For N = 15, 15C2 = 15 × 14 / 2 = 105."
            },
            {
                "q": "Consider a mono-alphabetic cipher with the following key value:\n(A B C D I J K L E F G H M N O P U V W X Q R S T Y Z)\nWhat will be the encrypted form of the message \"W I N D O W\"?",
                "options": {
                    "a": "W E N D H W",
                    "b": "S K N G H S",
                    "c": "S E N D O S",
                    "d": "None of these."
                },
                "answer": "c",
                "explanation": "According to the specified key, the letter 'W' maps to 'S', 'I' maps to 'E', 'N' maps to 'N', 'D' maps to 'D', and 'O' maps to 'O'. Hence the encrypted form of \"WINDOW\" will be \"SENDOS\"."
            },
            {
                "q": "How many AES rounds are required for 192-bit key size?",
                "options": {
                    "a": "10",
                    "b": "11",
                    "c": "12",
                    "d": "14"
                },
                "answer": "c",
                "explanation": "12 rounds are required in the AES algorithm for 192-bit key size."
            },
            {
                "q": "What is the key length in data encryption standard (DES)?",
                "options": {
                    "a": "56",
                    "b": "64",
                    "c": "128",
                    "d": "192"
                },
                "answer": "a",
                "explanation": "The DES encryption algorithm is a \"block cipher\" that encrypts information in blocks of 64 bits (8 bytes). Using a 56-bit key, DES encrypts each block in 16 identical rounds."
            },
            {
                "q": "100 parties want to exchange messages securely using some public key encryption technique like RSA. The number of distinct key values required will be __________.",
                "options": {
                    "a": "100",
                    "b": "150",
                    "c": "200",
                    "d": "250"
                },
                "answer": "c",
                "explanation": "In public-key or asymmetric encryption, every party is in possession of two keys, a public key and a private key. For N parties, the number of keys will be 2N. For N = 100, the number of distinct keys required will be 100 x 2 = 200."
            },
            {
                "q": "In Digital signature sender signs a message with its:",
                "options": {
                    "a": "Private key",
                    "b": "Public key"
                },
                "answer": "a",
                "explanation": "For digital signature or authentication sender signs a message with its private key that is authenticated by the corresponding public key."
            },
            {
                "q": "On which difficult mathematical problem does the security of RSA algorithm depend on?",
                "options": {
                    "a": "Discrete logarithm problem.",
                    "b": "Testing whether a given number if prime or not.",
                    "c": "Prime factorization problem.",
                    "d": "The RSA threshold detection.",
                    "e": "All of these."
                },
                "answer": "c",
                "explanation": "The security of the RSA algorithm depends on the complexity of factoring the product of two large prime numbers."
            },
            {
                "q": "Which of the following statement(s) is/are true for Diffie-Hellman Key Exchange algorithm?\n\n1. It allows group of users to agree on secret key over insecure channel.\n2. The security of the algorithm depends on prime factorization problem.\n3. The algorithm is vulnerable to man-in-the-middle attack.\n4. It does not require any prior communication between sender and receiver.",
                "options": {
                    "a": "1, 2 and 3",
                    "b": "2, 3 and 4",
                    "c": "1, 3 and 4",
                    "d": "1, 2 and 4"
                },
                "answer": "c",
                "explanation": "D-H algorithm is mainly used for key exchange between users over an insecure channel; it does not require any prior communication between sender and receiver for key exchange. As the communication is done over insecure channel it is vulnerable to man-in-the-middle attack. The complexity of the algorithm depends on that of cracking the discrete logarithm problem."
            }
        ],
        "Assignment 7": [
            {
                "q": "Which of the following is/are true for Unkeyed hash function (Modification Detection Code)?",
                "options": {
                    "a": "Unkeyed hash function is used to preserve integrity of message.",
                    "b": "Unkeyed hash function is used to authenticate source of message.",
                    "c": "Unkeyed hash function produces an output that depends only on the input data.",
                    "d": "None of these."
                },
                "answer": "a, c",
                "explanation": "Unkeyed hash function takes an input of variable length and converts it to a fixed-length output. It does not use any key, and thus the output only depends on the input data. Unkeyed hash function is used to preserve data integrity. It is impossible to figure out the sender of the message when we use Unkeyed hash function."
            },
            {
                "q": "Two messages M1 and M2 are fed to a hash function HASH to generate the hash values:\nH1 = HASH (M1)\nH2 = HASH (M2)\nWhen do we say there is a collision?",
                "options": {
                    "a": "H1 = H2.",
                    "b": "M1 = M2.",
                    "c": "H1 = HASH (H2).",
                    "d": "None of these."
                },
                "answer": "a",
                "explanation": "With respect to hashing, collision refers to the situation where more than one messages (here M1 and M2) map to the same hash value."
            },
            {
                "q": "Which of the following corresponds to second preimage resistance in the context of hash functions?",
                "options": {
                    "a": "Except of few hash values H, it should be difficult to find a message M1 such that HASH(M1) = H.",
                    "b": "Given a message M1, it should be difficult to find another message M2 such that HASH(M1) = HASH(M2).",
                    "c": "It should be difficult to find two messages M1 and M2 such that HASH(M1) = HASH(M2).",
                    "d": "None of these."
                },
                "answer": "b",
                "explanation": "When we use hash function then it is expected that it should be computationally infeasible to identify the input data; for this preimage resistance and collison rules are used. The first preimage resistance is defined as: Except for few hash values H, it should be difficult to find a message M1 such that HASH(M1) = H. This means that for all pre-specified outputs, it should be computationally infeasible to find any input which hashes to that output. The second preimage resistance is defined as: Given a message M1, it should be difficult to find another message M2 such that HASH(M1)=HASH(M2), which means it should be computationally infeasible to find any second input which has the same output as any specified input. Collison resistance is defined as: It should be difficult to find two messages M1 and M2 such that HASH(M1)=HASH(M2). This means it should be difficult to find two messages with same hash values."
            },
            {
                "q": "What is the message digest length of MD5 and SHA-1 hash functions?",
                "options": {
                    "a": "32-bit, 64-bit.",
                    "b": "64-bit, 128-bit.",
                    "c": "128-bit, 160-bit.",
                    "d": "128-bit, 256-bit.",
                    "e": "None of these."
                },
                "answer": "c",
                "explanation": "MD5 and SHA-1 hash function results in 128-bit and 160-bit hash values that is often termed as message digest."
            },
            {
                "q": "Which of the following is/are not hash functions?\n\n1. MD5\n2. Triple-DES\n3. SHA-1\n4. RSA",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "2 and 4"
                },
                "answer": "d",
                "explanation": "MD5 and SHA-1 are examples of hash function, while Triple-DES is a symmetric key encryption algorithm, and RSA is a public key encryption algorithm."
            },
            {
                "q": "Hash functions are faster than symmetric and public key encryption?",
                "options": {
                    "a": "True",
                    "b": "False"
                },
                "answer": "a",
                "explanation": "Computation of hash function is the fastest. Computation of public-key encryption is the slowest. Symmetric-key encryption lies in between the two."
            },
            {
                "q": "Which of the following is/are false for digital signature?",
                "options": {
                    "a": "Digital signature is legally equivalent to hand-written signature.",
                    "b": "In digital signature, signer uses his public key to sign.",
                    "c": "Anybody having access to the signer's public key can verify the signature.",
                    "d": "None of these."
                },
                "answer": "b",
                "explanation": "Digital signature is an example of authentication where the signer uses his private key to sign any document, a receiver or anybody having the access of public key of the signer can identify the signer, digital signature is equivalent to hand written signature."
            },
            {
                "q": "Which of the following statement(s) is/are true?",
                "options": {
                    "a": "Secure Socket Layer (SSL) provides security to the data transferred between web browser and server.",
                    "b": "SSL can be used for any network service running over TCP/IP.",
                    "c": "SSL Handshake Protocol provides mutual authentication.",
                    "d": "None of these."
                },
                "answer": "a, b, c",
                "explanation": "SSL is used to provide secure channel for data transfer. It uses TCP to provide reliable end-to-end secure service and can be used for any network service running over TCP/IP. SSL is responsible for data security and integrity; it can also perform some other functionalities such as fragmentation and encryption. SSL Handshake Protocol is used to initial session between server and client and provides mutual authentication."
            },
            {
                "q": "Which of the following statement(s) is/are true for SSL Alert Protocol?\n\n1. If the first byte is 1 then it indicates that this alert has no impact on the connection between sender and receiver.\n2. If the fist byte is 1 then the SSL connection is terminated.\n3. If the first byte is 2 then it indicates that this alert has no impact on the connection between sender and receiver.\n4. If the first byte is 2 then the SSL connection is terminated.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "d",
                "explanation": "SSL Alert protocol is used to send session messages associated with data exchange and functioning of the protocol. Each SSL alert message consists of two bytes. The first byte can be either 1 or 2. The value 1 indicates warning such as bad certificate, no certificate, certificate expired, unsupported certificate etc. This alert does not have any impact on the session. The value 2 indicates the fatal error such as handshake failure, incorrect MAC etc. which leads to connection termination. The second byte describes the error."
            },
            {
                "q": "Consider the following statements:\n(i) SSL is designed to establish secure connection between two hosts.\n(ii) s-HTTP is designed to send individual messages securely.",
                "options": {
                    "a": "Only (i) is true",
                    "b": "Only (ii) is true",
                    "c": "Both (i) and (ii) are true",
                    "d": "Both (i) and (ii) are false"
                },
                "answer": "c",
                "explanation": "Secure HTTP is an extension of HTTP protocol that is used to send data securely over the web. The main difference between SSL and s-HTTP is that SSL is designed to establish a secure connection between two hosts whereas s-HTTP is designed to send individual messages securely."
            },
        ],
        "Assignment 8": [
            {
                "q": "Consider the following statements:\n(i) Steganography refers to a set of methods to hide some secrete information in an audio/image/executable files.\n(ii) Steganography and digital watermarking shares same operational and functional behaviors.",
                "options": {
                    "a": "Only (i) is true",
                    "b": "Only (ii) is true",
                    "c": "Both (i) and (ii) are true",
                    "d": "Both (i) and (ii) are false"
                },
                "answer": "c",
                "explanation": "Steganography refers to a set of methods where some information is hidden within some other file (like image, audio, video, executable, etc.). Digital watermarking embeds copyright, ownership, license and similar information in a medium such as audio, video, image etc. Digital watermarking is different from steganography only in the intent of hiding. They share same operational and functional behavior."
            },
            {
                "q": "Consider a gray-level image of size 2000 x 2000, where each pixel is stored in 24-bits (containing red, green, and blue components as 8-bit each). How many bytes of information can be hidden in the image by using LSB steganography technique? (Assume that only the least significant bit in each 8-bit color component is modified).",
                "options": {
                    "a": "500000 bytes",
                    "b": "1000000 bytes",
                    "c": "1500000 bytes",
                    "d": "2000000 bytes"
                },
                "answer": "c",
                "explanation": "Each pixel consists of 24 bits or 3 bytes, and hence 3 bits of information can be stored in each pixel. The number of bits of hidden information that can be stored in the whole image will be: 2000 x 2000 x 3 bits = 2000 x 2000 x 3 / 8 bytes = 15,00,000 bytes."
            },
            {
                "q": "Which of the following statement(s) is/are true?",
                "options": {
                    "a": "Biometrics refers to an automated method for hiding information in a media like audio, video, image etc.",
                    "b": "Biometrics refers to embedding copyright, ownership, license and similar information in a medium such as audio, video, image etc.",
                    "c": "Biometrics refers to an automated method for recognizing individuals based on measurable biological and behavioral characteristics.",
                    "d": "None of these"
                },
                "answer": "c",
                "explanation": "Hiding information is referred to as steganography, hiding information such as copyright is known as digital watermarking. Biometrics refers to an automated method for recognizing individuals based on measurable biological and behavioral characteristics."
            },
            {
                "q": "Which of the following is/are example(s) of behaviour biometric?",
                "options": {
                    "a": "Retina scan",
                    "b": "Fingerprint recognition",
                    "c": "Facial recognition",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "Physical biometrics refers to physiological features on the human body such as a fingerprint, retina scan whereas behavioral biometrics analyzes parameters such as keystroke pattern, typing speed, mouse movement, signature styles etc."
            },
            {
                "q": "Which of the following statement(s) is/are true in biometric systems?",
                "options": {
                    "a": "For authentication application, a user template is compared against all possible templates stored in the database.",
                    "b": "For verification application, a user template is compared against a specific single template stored in the database.",
                    "c": "Biometric systems can provide 100% accuracy in security applications.",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "When biometric is used for authenticating a known person, his/her biometric template is compared against the corresponding template stored in the database. However, for identifying a person whose id is not known, his/her biometric template has to be compared with all the templates stored in the database. None of the biometric systems can provide 100% accuracy."
            },
            {
                "q": "Which of the following attacks rely on the accumulation of TCP half-open connections on the server?",
                "options": {
                    "a": "Ping of death attack",
                    "b": "SYN flooding attack",
                    "c": "Smurf attack",
                    "d": "None of these"
                },
                "answer": "b",
                "explanation": "The SYN flooding attack tries to exploit a weakness in the TCP connection establishment phase. The attacker floods the victim machine with a large number of TCP connection requests, each of which is left as half-open (i.e. the third packet in 3-way handshake is not sent). Each connection request will take up some resources on the victim machine (e.g. port number, buffer space, etc.), and ultimately genuine requests will not get processed."
            },
            {
                "q": "In which of the following denial-of-service attacks, the attacker attempts to crash/freeze target computer/service by sending oversized packet in simple ping command?",
                "options": {
                    "a": "SYN flooding attack",
                    "b": "Smurf attack",
                    "c": "Ping-of-death",
                    "d": "None of these"
                },
                "answer": "c",
                "explanation": "In the ping-of-death attack, attacker uses larger than maximum packet size (65536) ping packets that are broken into smaller segments and resembled at receiver end. Systems that are unable to handle such abnormalities either crash or reboot."
            },
            {
                "q": "Which of the following statement(s) is/are true for HTTP Flood attack?",
                "options": {
                    "a": "It is a type of Distributed-Denial-of-Service (DDoS) attack",
                    "b": "It overwhelms a target server by accumulating large number of TCP half-open connections",
                    "c": "It overwhelms a target server using oversized ping packets",
                    "d": "It overwhelms a target server with HTTP request",
                    "e": "None of these"
                },
                "answer": "a, d",
                "explanation": "HTTP Flood attack is a type DDoS attack which is designed to overwhelm the target server with HTTP requests. Once the target is saturated with HTTP requests, it does not respond to HTTP request from legitimate users."
            },
            {
                "q": "Which of the following approach can be used to mitigate HTTP flood attack?\n\n1. Use captcha test\n2. Use JavaScript computational challenge\n3. Use web application firewall\n4. Block ping requests\n5. Block TCP connections",
                "options": {
                    "a": "1, 2 and 3",
                    "b": "2, 3 and 4",
                    "c": "3, 4 and 5",
                    "d": "1, 4 and 5"
                },
                "answer": "a",
                "explanation": "To protect web server from HTTP flood attack a simple method can be giving challenge to the requesting machine in order to test whether it is a bot or a legitimate user. For this we can use captcha test or simple JavaScript computational challenge. The other way to mitigate HTTP flood attack is to use web application firewall that can identify an authentic source of traffic and selectively block all malicious traffic."
            },
            {
                "q": "Which of the following is true for recursive name resolution?",
                "options": {
                    "a": "A host may have to send multiple DNS requests to several DNS servers",
                    "b": "A host sends a single DNS request to its next higher-level DNS server",
                    "c": "Name resolution happens recursively within the host itself",
                    "d": "All of these"
                },
                "answer": "b",
                "explanation": "The DNS server receives a DNS request from a host containing a domain name, and it returns the corresponding IP address. In iterative name resolution, in response to a DNS request, the DNS server sends back a response specifying the next DNS server to send the query. In this way, the host may have to send a number of DNS requests before it gets resolved. In recursive name resolution, the host sends a DNS request to the next higher level DNS server. The DNS server in turn recursively forwards the request to its next higher-level DNS server, and so on, until the request gets resolved. The final reply gets back to the host. Here, the host sends a single DNS request."
            }
        ],
        "Assignment 9": [
            {
                "q": "In promiscuous mode, a network device, such as an adapter on a host system, can intercept and read all traffic on the network segment to which the adapter is connected.",
                "options": {
                    "a": "True",
                    "b": "False"
                },
                "answer": "a",
                "explanation": "In computer networking, promiscuous mode is a mode of operation, as well as a security, monitoring and administration technique which is mostly used for network analyzer tools such as Wireshark and burpsuit. In promiscuous mode, a network device, such as an adapter on a host system, can intercept and read in its entirety each network packet that arrives."
            },
            {
                "q": "Which of the following commands can be used to put the NIC of a machine to promiscuous mode? (Assumption: Machine IP - 192.168.43.48, IP of default gateway - 192.168.43.141, the machine is connected with eth0 interface).",
                "options": {
                    "a": "arpspoof 192.168.43.48",
                    "b": "arpspoof 192.168.43.141",
                    "c": "arpspoof –i eth0 192.168.43.48",
                    "d": "arpspoof –i eth0 192.168.43.141"
                },
                "answer": "d",
                "explanation": "To put any machine (say M) into promiscuous mode we need to send fake ARP messages to all devices stating that the MAC address of default gateway is changed to the MAC address of the machine M. To achieve this, arpspoof tool is used, and the command used for the same is arpspoof –i 192.168.43.141."
            },
            {
                "q": "In Wireshark, to filter all the packets used by an IP address 23.36.4.106, which of the following filter option/command can be used?",
                "options": {
                    "a": "23.36.4.106",
                    "b": "ip == 23.36.4.106",
                    "c": "ip.addr == 23.36.4.106",
                    "d": "ip.address = 23.36.4.106",
                    "e": "None of these"
                },
                "answer": "c",
                "explanation": "To filter all packets \"ip.addr ==\" option is used along with the IP address."
            },
            {
                "q": "A simple packet analyzer tool such as Wireshark can capture login credential of a user if the login page is using the following Protocol:",
                "options": {
                    "a": "HTTP",
                    "b": "SSH",
                    "c": "HTTPS",
                    "d": "SSL",
                    "e": "None of these"
                },
                "answer": "a",
                "explanation": "Wireshark can capture credentials of webpages which uses unsecure protocols such as HTTP, FTP."
            },
            {
                "q": "Which of the following methods can be used to detect network sniffing in a network?\n\n1. By checking the ARP entry\n2. By conducting TCP stealth scan on all the machines in the network\n3. By using a script that checks whether any of the machines has the network card configured in the promiscuous mode\n4. None of these",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "1 and 3",
                    "d": "3 and 4"
                },
                "answer": "c",
                "explanation": "By manually checking the ARP entry we can identify if any system is using same MAC address as the MAC of default gateway, which basically indicates that that particular system is configured in the promiscuous mode. Using the following NMAP command, we can find out whether any of the network cards on the network is configured in the promiscuous mode. (It is done by broadcasting fake ARP packets) nmap –script=sniffer-detect <IP addresses to check>"
            },
            {
                "q": "What is the purpose of scanner module available in burp suite?",
                "options": {
                    "a": "It is used to mount password attack",
                    "b": "It is used for manipulating and reissuing packets and to analyze their response",
                    "c": "It is used for creating dictionary",
                    "d": "It is used for automotive crawling web applications",
                    "e": "None of these"
                },
                "answer": "e",
                "explanation": "Scanner module is used for finding vulnerabilities in web applications."
            },
            {
                "q": "In Burp suite which of the following module is used to intercept, inspect and modify raw traffic?",
                "options": {
                    "a": "Spider",
                    "b": "Scanner",
                    "c": "Intruder",
                    "d": "Proxy",
                    "e": "None of these"
                },
                "answer": "d",
                "explanation": "Spider module is used for automotive crawling, scanner is used for vulnerability scanning, intruder is used for automatic customized attack against web application, proxy module gives a direct view of how target application works by working as proxy server. It gives facility to intercept, inspect and modify raw traffic of the application."
            },
            {
                "q": "Which of the following is/are example(s) of computer-based social engineering attack?",
                "options": {
                    "a": "Impersonation",
                    "b": "Tailgating",
                    "c": "Shoulder surfing",
                    "d": "Chain letters",
                    "e": "phishing"
                },
                "answer": "d, e",
                "explanation": "The options (a), (b) and (c) are example of human-based social engineering attacks, while d and e are examples of computer-based social engineering attack."
            },
            {
                "q": "How does Slowloris attack work?",
                "options": {
                    "a": "It sends a single large ping packet to victim system",
                    "b": "It sends multiple HTTP requests to the victim system but never completes the request",
                    "c": "It sends large number ARP packet to the victim system",
                    "d": "None of these"
                },
                "answer": "b",
                "explanation": "It sends multiple HTTP packets to connect with the victim system, but never completes resulting DoS for legitimate users."
            },
            {
                "q": "Which of the following tools can be used to mount DoS attack?\n\n1. LOIC tool\n2. Hping3\n3. Hydra\n4. Crunch",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "a",
                "explanation": "LOIC and Hping3 tools can be used for DoS attack, Hydra and Crunch are used for password attack."
            }
        ],
        "Assignment 10": [
            {
                "q": "Which of the following are examples of hardware-based attacks?\n\n1. Side-channel attack\n2. Physical probing\n3. Denial of service stack\n4. SQL injection attack",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "a",
                "explanation": "In side-channel attack, some side channels (like delay, power, etc.) are monitored during some computation using some sophisticated measuring instruments, and as such requires access to the hardware that runs the computation. In comparison, denial-of-service and SQL injection are essentially software-based attacks."
            },
            {
                "q": "For modular exponentiation computation of x25, how many squaring and multiplication operations would be required?",
                "options": {
                    "a": "4 and 4",
                    "b": "4 and 2",
                    "c": "3 and 4",
                    "d": "5 and 2",
                    "e": "5 and 3"
                },
                "answer": "b",
                "explanation": "The binary representation of 25 is 11001. Thus, x25 = x16 * x8 * x1 = (x8 * x4)2 * x1 = ((x4 * x2)2)2 * x1 = (((x2 * x)2)2)2 * x1. This computation requires 4 squaring and 2 multiplication operations."
            },
            {
                "q": "Which of the following is/are true for side-channel attacks?",
                "options": {
                    "a": "They exploit weakness in cryptographic algorithm",
                    "b": "They exploit weakness in algorithm implementation",
                    "c": "They do not require physical access to the device",
                    "d": "It is used to encrypted ciphertexts for a number of given plaintext messages"
                },
                "answer": "b",
                "explanation": "Side-channel attacks basically exploit weaknesses in the implementation (hardware or software) of an algorithm. It requires physical access to the device for measurement of some parameter."
            },
            {
                "q": "Which of the following is/are true for simple power analysis?",
                "options": {
                    "a": "In this analysis attacker directly uses power consumption to learn bits of secret key",
                    "b": "Using this analysis we can identify features like rounds of DES/AES, multiply in RSA exponentiation",
                    "c": "In this analysis the waveform is partitioned into two sets according to selected bits",
                    "d": "It relies on the use of a hardware Trojan in the circuit",
                    "e": "None of these"
                },
                "answer": "a, b",
                "explanation": "In simple power analysis the waveform is examined to identify the bit stream/key, In this analysis the attacker directly uses the power consumption of bits, using this attack, attacker can identify number of rounds in AES/DES, multiply in RSA exponentiations. It is easy to defend. In counter to this Differential power analysis waveform is portioned according to bit stream and then the difference of the waveform is used for analysis. Power analysis attacks does not use hardware Trojan."
            },
            {
                "q": "Which of the following strategies can be used to prevent timing analysis attack?",
                "options": {
                    "a": "Make the computation independent of the input",
                    "b": "Package the chip in a temper proof casing",
                    "c": "Use highly secured cryptographic algorithm",
                    "d": "None of these"
                },
                "answer": "a",
                "explanation": "Side channel attacks such as power and time analysis attacks exploit the weakness in the algorithm implementation. So if we use highly secure algorithm and do not implement it correctly then it can be exploited using side channel attack. Side-channel attacks can be prevented by making all the branches in conditional statements symmetric with respect to computation (or in simple word making the computation constant irrespective of input pattern)."
            },
            {
                "q": "Which of the following is not a desirable property of PUF?",
                "options": {
                    "a": "Given a PUF, it is hard to construct a procedure PUF', where PUF != PUF', and PUF'(x) = PUF(x) for all x",
                    "b": "Given only y and corresponding PUF instance, it is hard to find x such that PUF(x) = y",
                    "c": "Given PUF and x, it should be easy to evaluate y = PUF(x)",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "All the given points are desirable properties of PUF."
            },
            {
                "q": "PUF can be used for:",
                "options": {
                    "a": "Security Primitive",
                    "b": "Identification",
                    "c": "Private/Public key pair generation",
                    "d": "None of these"
                },
                "answer": "a, b, c",
                "explanation": "PUFs can be used for all given applications (refer week 10, lecture 49, slide number 9,10,11)."
            },
            {
                "q": "Number of possible paths in 8-bit arbiter PUF will be:",
                "options": {
                    "a": "128",
                    "b": "256",
                    "c": "512",
                    "d": "1024"
                },
                "answer": "b",
                "explanation": "Arbiter PUF is composed of n two-port switching stages. For an n-bit challenge size, number of possible paths will be 2n; for n= 8, number of possible paths will be 256."
            },
            {
                "q": "Consider the following statements:\n(i) Hardware Trojans are small modifications in the circuit.\n(ii) It is used to reduce power consumption of a circuit.",
                "options": {
                    "a": "Only (i) is true",
                    "b": "Only (ii) is true",
                    "c": "Both (i) and (ii) are true",
                    "d": "Both (i) and (ii) are true"
                },
                "answer": "a",
                "explanation": "A hardware Trojan is a small malicious circuit integrated with a normal chip which incurs small hardware overhead, and is difficult to detect. It does not lead to reduction in power consumption."
            },
            {
                "q": "Which of the following statement(s) is/are true about Hardware Trojan?",
                "options": {
                    "a": "It performs tasks for which it are designed or programmed",
                    "b": "It can replicate itself",
                    "c": "It does nothing harmful to the user's computer system",
                    "d": "None of these"
                },
                "answer": "a",
                "explanation": "A hardware Trojan is a small malicious circuit integrated with a normal chip which incurs small hardware overhead, and triggers in some event; it cannot replicate itself."
            }
        ],
        "Assignment 11": [
            {
                "q": "Which of the following is used to take advantage of system/application bugs?",
                "options": {
                    "a": "Exploit",
                    "b": "Payload",
                    "c": "Auxiliary",
                    "d": "Encoder",
                    "e": "msfvenum"
                },
                "answer": "a",
                "explanation": "Encoder module is used to encode the payloads. Exploit module is used to take advantage of System/Application bugs. Payload module is used to establish communication channel between Metasploit framework and target system. Auxiliary module is used to perform brute force attack, DoS attack, host and port scanning, vulnerability scanning, etc."
            },
            {
                "q": "Which of the following statement is true for meterpreter payload?",
                "options": {
                    "a": "Meterpreter payload is used to perform brute force attack.",
                    "b": "Meterpreter payload provides an interactive shell to the attacker from which attacker can explore the target machine and can execute codes.",
                    "c": "Meterpreter payload is used to launch Metasploit framework.",
                    "d": "Meterpreter payload is used to bypass the anti-virus installed in target system.",
                    "e": "None of these."
                },
                "answer": "b",
                "explanation": "To perform brute force attack auxiliaries are used, to bypass antivirus encoders are used to encode payloads, to launch Metasploit framework msfconsole command is used. Meterpreter payload is used to create an interactive shell such that an attacker can explore target system and can run various other commands."
            },
            {
                "q": "Which of the following module is used to create new payloads.",
                "options": {
                    "a": "Msfconsol",
                    "b": "Encoders",
                    "c": "Exploit",
                    "d": "None of these"
                },
                "answer": "d",
                "explanation": "msfconsol provides an user interface for Metasploit framework, encoders are used to encode payloads to bypass anti-virus installed in target system, Exploit module consist of exploits which is basically a piece of code that is made to take advantage of system/application bugs. Msfvenom is used to create new payloads."
            },
            {
                "q": "In Metasploit, to check various parameters that need to be set for an exploit, which of the following commands is used?",
                "options": {
                    "a": "Show parameters",
                    "b": "Show options",
                    "c": "Set parameters",
                    "d": "Set options",
                    "e": "None of these"
                },
                "answer": "b",
                "explanation": "To check all parameters that need to be set for any exploit we can use \"show options\" command."
            },
            {
                "q": "To create a payload (backdoor), which of the following is required?\n\n1. Name of the payload\n2. IP of the target system\n3. IP of an attacker system\n4. Port of target system\n5. Port of an attacker system",
                "options": {
                    "a": "1, 2 and 4",
                    "b": "1, 3 and 5",
                    "c": "2, 3 and 4",
                    "d": "3, 4 and 5"
                },
                "answer": "b",
                "explanation": "To create payload, name of payload, IP and port of the attacker system are required."
            },
            {
                "q": "Which of the following tools/approach can be used to extract existing and hidden pages of a webserver?\n\n1. Dirb\n2. NMAP scan using \"http-enum\" script\n3. Hydra\n4. Crunch",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "a",
                "explanation": "To scan a webserver tools like dirb, dnsenum is used, we also use nmap script http-enum for the same purpose. Hydra and Crunch are used for password cracking."
            },
            {
                "q": "Consider the table \"USERS\" consist of 3 column u_id, u_name and pass as given below:\nu_id u_name Pass\n1 NPTEL nptel1234\n2 IIT_KGP kgp1234\n3 Eth_Hack eth4321\nWhich of the following SQL queries are malicious with respect to the above table?",
                "options": {
                    "a": "SELECT * from USERS;",
                    "b": "SELECT * from USERS where u_id = \"5\"",
                    "c": "SELECT * from USERS where u_name = \"any\"",
                    "d": "SELECT * from USERS where u_name = \"any\" or 1=1"
                },
                "answer": "d",
                "explanation": "The first three SQL queries are valid queries; however, we will not get any output for the queries (b) and (c). The last query is a malicious query, which has the malicious condition 1=1."
            },
            {
                "q": "Which of the following statement(s) is/are true for sql injection attack?\n\n1. If a webpage is vulnerable to blind sql injection then it will print error message for an incorrect user input.\n2. If a webpage is vulnerable to blind sql injection then it will not print anything for an incorrect user input.\n3. If a webpage is vulnerable to error-based sql injection then it will print error message for an incorrect user input.\n4. If a webpage is vulnerable to error-based sql injection then it will not print anything for an incorrect user input.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "1 and 4"
                },
                "answer": "b",
                "explanation": "If the webpage is vulnerable to error-based sql injection, then it will generate an error message for incorrect user input. And if it is vulnerable to blind sql injection attack then it will not through any error to an incorrect user input."
            },
            {
                "q": "Which of the following tools is used to automate sql injection attacks?",
                "options": {
                    "a": "Hydra",
                    "b": "Metasploit",
                    "c": "SQL MAP",
                    "d": "NMAP"
                },
                "answer": "c",
                "explanation": "To automate sql injection attack, SQL MAP tool can be used. NMAP is used for vulnerability scanning in a network or web application, whereas Metasploit framework is used to exploit various weakness of the system, Hydra is used to perform dictionary based password attack."
            },
            {
                "q": "Which of the following statement(s) is/are true for reflected XXS?",
                "options": {
                    "a": "It affects all users of that web application.",
                    "b": "It affects only a single client of the web application.",
                    "c": "It is stored in the database of web application.",
                    "d": "None of these."
                },
                "answer": "b",
                "explanation": "Stored XSS is stored in a database of web application and can affect all users; however, reflected XSS is limited to a single client."
            }
        ],
        "Assignment 12": [
            {
                "q": "Which of the following options can be used for host discovery using NMAP?\n\n1. –PE\n2. –PC\n3. –PM\n4. –PP",
                "options": {
                    "a": "1, 2 and 3",
                    "b": "2, 3 and 4",
                    "c": "1, 3 and 4",
                    "d": "1, 2 and 4"
                },
                "answer": "c",
                "explanation": "For host discovery using NMAP various options can be used, the most common option is ping sweep. –PE is used for ICMP ECHO Sweep, -PP and –PM is used for ICMP NON-ECHO ping sweep scanning. There is no option as –PC."
            },
            {
                "q": "Which of the following packets will be received in response form a target if an attacker sends out an ICMP ECHO request (Type 8) packet (Assume that the target is live).",
                "options": {
                    "a": "ICMP Echo Request (Type 8)",
                    "b": "ICMP Echo Reply (Type 0)",
                    "c": "ICMP Timestamp reply (Type 14)",
                    "d": "ICMP Address mask reply (Type 18)"
                },
                "answer": "b",
                "explanation": "In response to ICMP Echo request, if the host is live we will receive an ICMP Echo reply (Type 0) packet. If the host is down we will not get any response form the target system."
            },
            {
                "q": "In TCP sweep scan, a scanner sends a \"S\" packet (Synchronization) and receives a \"RA\" packet (Reset) from target. What does it indicates?",
                "options": {
                    "a": "Target is alive/up.",
                    "b": "Target is down."
                },
                "answer": "b",
                "explanation": "TCP sweep is carried out using the –PS, –PA option in NMAP. It is also done by some default options such as –sT, -p, -Pn. In TCP sweep scan using –PS option, Synchronization packet (S) is sent from attacker system, if the attacker get an Acknowledge packet (SA) as response then it conclude the target system as up, and if it receives a Reset (RA) packet then attacker systems conclude that the target is down."
            },
            {
                "q": "To see why NMAP is reporting any port as open or close (or a host as up or down) which of the following options is used?",
                "options": {
                    "a": "--disable-arp-ping",
                    "b": "--packet-trace",
                    "c": "--show-reason",
                    "d": "--reason"
                },
                "answer": "d",
                "explanation": "disable-arp-ping option is used to disable arp request for host scanning, packet-trace option is used to trace the incoming and outgoing packets, reason option is used to see why nmap is reporting any port as open or close or any host as up and down. There is no option called show-reason."
            },
            {
                "q": "Which of the following scanning options uses all type of sweep operations (except UDP sweep)?",
                "options": {
                    "a": "–sn",
                    "b": "–PE",
                    "c": "–PP",
                    "d": "None of these"
                },
                "answer": "a",
                "explanation": "By default NMAP uses all type of sweep operations in common scanning options such that it can get better details about any system. Options that use all type of sweep operations are –sP, -sn, -sl, -Pn. If we use options such as –PE and PP, then specific sweep operation (ICM sweep operation) will be performed."
            },
            {
                "q": "Which of the following NMAP scans completes 3-way handshake?",
                "options": {
                    "a": "ICMP Echo Sweep Scan",
                    "b": "ICMP Non-Echo Sweep Scan",
                    "c": "TCP Connect Scan",
                    "d": "TCP Stealth Scan"
                },
                "answer": "c",
                "explanation": "When we do not have root privilege then for scanning we can use TCP connect scan (-sT) option which done port scanning by completing a TCP 3 way handshake process. ICMP Echo and Non-Echo sweep scan use ICMP packets. TCP stealth scan uses TCP 3 way handshake but it never completes the third step."
            },
            {
                "q": "In NMAP, how many ports are scanned when we use –F option?",
                "options": {
                    "a": "50",
                    "b": "100",
                    "c": "500",
                    "d": "1000"
                },
                "answer": "b",
                "explanation": "By default NMAP scans for top 1000 ports, if we use –F option then top 100 ports are scanned."
            },
            {
                "q": "Which of the following NMAP option is used for OS detection?",
                "options": {
                    "a": "–sL",
                    "b": "–sP",
                    "c": "–PO",
                    "d": "–sU",
                    "e": "None of these"
                },
                "answer": "e",
                "explanation": "For OS detection –O option is used, we can also use –A option which is known as aggressive scan which can be used for OS, version and vulnerability scanning."
            },
            {
                "q": "Which of the following protocols are vulnerable to sniffing attack?\n\n1. HTTP\n2. HTTPS\n3. SSL\n4. SSH\n5. FTP",
                "options": {
                    "a": "1 and 5",
                    "b": "2 and 3",
                    "c": "3 and 4",
                    "d": "2 and 4",
                    "e": "1 and 3"
                },
                "answer": "a",
                "explanation": "The protocols that does not uses secure channel for data transfer such as HTTP, FTP are vulnerable to sniffing."
            },
            {
                "q": "Which of the following statement(s) is/are true for promiscuous mode?\n\n1. While running network analyzer tool such as sniffer, it is necessary to enable promiscuous mode.\n2. In promiscuous mode the sniffer can read all traffic on the network segment to which the NIC is connected.\n3. We do not require root privilege to set the NIC to promiscuous mode.",
                "options": {
                    "a": "1 and 2",
                    "b": "2 and 3",
                    "c": "1 and 3",
                    "d": "All of these"
                },
                "answer": "a",
                "explanation": "In computer networking, promiscuous mode is a mode of operation, as well as a security, monitoring and administration technique that is mostly used for network analyzer tools such as Wireshark and burpsuit. In promiscuous mode, a network device, such as an adapter on a host system, can intercept and read in its entirety each network packet that arrives (irrespective of sender and receiver). We need root privilege to enable promiscuous mode in the device."
            }
        ]
    }
};